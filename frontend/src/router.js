import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import NewFicha from './pages/NewFicha'

export default function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/fichamanagement" component={NewFicha}/>
            </Switch>
        </BrowserRouter>
    )
}