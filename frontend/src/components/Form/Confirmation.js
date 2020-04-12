import React, { Component } from 'react'

//Material Components
import MuiThemePorvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

import api from '../../services/api'

export class Confirmation extends Component {

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

        const { values: {
                char_name, 
                player_name, 
                char_race,
                char_class, 
                char_lvl, 
                char_alignment, 
                char_description

        } } = this.props

        return (
            <MuiThemePorvider>
                <React.Fragment>

                    <AppBar title="Confirmação" />

                    <List>

                        <ListItem 
                            primaryText="Nome do Personagem"
                            secondaryText={ char_name }
                        />
                        <ListItem 
                            primaryText="Nome do Jogador"
                            secondaryText={ player_name }
                        />
                        <ListItem 
                            primaryText="Raça"
                            secondaryText={ char_race }
                        />
                        <ListItem 
                            primaryText="Classe"
                            secondaryText={ char_class }
                        />
                        <ListItem 
                            primaryText="Level"
                            secondaryText={ char_lvl }
                        />
                        <ListItem 
                            primaryText="Alinhamento"
                            secondaryText={ char_alignment }
                        />
                        <ListItem 
                            primaryText="Descrição"
                            secondaryText={ char_description }
                        />
                    </List>

                    <br/>

                    <RaisedButton 
                        label="Voltar"
                        primary={false}
                        style={style.button}
                        onClick={this.back}
                    />

                    <RaisedButton 
                        label="Confirmar"
                        primary={true}
                        style={style.button}
                        onClick={this.continue}
                    />

                </React.Fragment>
            </MuiThemePorvider>
        )
    }
}

const style = {
    button: {
        margin: 15
    }
}
export default Confirmation