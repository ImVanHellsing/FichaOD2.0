import React , { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

import logoImg from '../../assets/img/main-logo.png'
import { HeaderDiv, NavbarDiv , NavLogo, NavText , NavBtn, Menu, Ul} from './styles'

export default class NavbarHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            closed: true,
        };
    }

    toggleSidebar = () => {
        this.setState({
            closed: !this.state.closed,
        });
    };

    render () {

        const {closed} = this.state;
        let stateClass = ''

        if(closed) {
            stateClass = 'hidden'
        }else{
            stateClass = 'active'
        }

        console.log(stateClass)

        return (
            <Fragment>
                
                {/* NavBar */}
                <HeaderDiv>
                    <NavbarDiv>
    
                        <NavLogo>
                            <img src={logoImg} alt="Logo Old Dragon" className="logo"></img>
                        </NavLogo>
    
                        <NavText>
                            <p>Old Dragon - Ficha Online</p>
                        </NavText>
    
                        <NavBtn onClick={() => this.toggleSidebar()}>
                            <i><FaBars /></i>
                        </NavBtn>
                            
                    </NavbarDiv>
                </HeaderDiv>

                {/* SideBar */}
                <Menu>

                    <div className={closed ? "hidden" : "active"}>
                        <Link className="close" to="/" onClick={() => this.toggleSidebar()}>
                            &times;
                        </Link>

                        <h2>Desenvolvedor</h2>
                        
                        <Ul>
                            <li>
                                <h3>Matheus Duarte dos Santos</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur aliquet mi, et vehicula ligula feugiat quis. Ut sit amet tempor nunc. Integer sagittis iaculis blandit.</p>
                                <i className="facebook"><FaFacebook /></i>
                                <i className="linkedin"><FaLinkedin /></i>
                                <i className="github"><FaGithub /></i>
                            </li>

                        </Ul>
                    </div>
                </Menu>
            </Fragment>
        )
    }
}