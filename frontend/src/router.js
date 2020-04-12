import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import NewFicha from './pages/NewFicha'

export default function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/fichamanagement" component={NewFicha}/>
            </Switch>
        </BrowserRouter>
    )
}