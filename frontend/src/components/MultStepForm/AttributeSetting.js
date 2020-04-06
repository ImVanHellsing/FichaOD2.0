import React, { Component } from 'react'

//Material Components
import MuiThemePorvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class AttributeSetting extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    
    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {

        const { values, handleChange } = this.props

        return (
            <MuiThemePorvider>
                <React.Fragment>

                    <AppBar title="Atributos Principais" />

                    <TextField 
                        hintText="Nome do Personagem"
                        floatingLabelText="Nome do Personagem"
                        onChange={ handleChange('char_name') }
                        defaultValue={values.char_name}
                    />

                    <br/>

                    <TextField 
                        hintText="Nome do Jogador"
                        floatingLabelText="Nome do Jogador"
                        onChange={ handleChange('player_name') }
                        defaultValue={values.player_name}
                    />

                    <br/>

                    <TextField 
                        hintText="Raça"
                        floatingLabelText="Raça"
                        onChange={ handleChange('char_race') }
                        defaultValue={values.char_race}
                    />

                    <br/>

                    <TextField 
                        hintText="Classe"
                        floatingLabelText="Classe"
                        onChange={ handleChange('char_class') }
                        defaultValue={values.char_class}
                    />
                    
                    <br/>

                    <TextField 
                        hintText="Nível"
                        floatingLabelText="Nível"
                        onChange={ handleChange('char_lvl') }
                        defaultValue={values.char_lvl}
                    />
                    
                    <br/>

                    <TextField 
                        hintText="Alinhamento"
                        floatingLabelText="Alinhamento"
                        onChange={ handleChange('char_alignment') }
                        defaultValue={values.char_alignment}
                    />
                    
                    <br/>

                    <TextField 
                        hintText="Descrição"
                        floatingLabelText="Descrição"
                        onChange={ handleChange('char_description') }
                        defaultValue={values.char_description}
                    />
                    
                    <br/>

                    <RaisedButton 
                        label="Voltar"
                        primary={false}
                        style={style.button}
                        onClick={this.back}
                    />

                    <RaisedButton 
                        label="Continuar"
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
export default AttributeSetting