import React, { Component } from 'react'

//Material Components
import MuiThemePorvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Sucess extends Component {

    continue = e => {
        e.preventDefault()
        //API code to backend form validation
        this.props.nextStep()
    }
    
    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {

        return (
            <MuiThemePorvider>
                <React.Fragment>

                    <AppBar title="Sucess" />
                    <h1>A sua ficha foi criada</h1>
                </React.Fragment>
            </MuiThemePorvider>
        )
    }
}

export default Sucess