import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

import logoImg from '../assets/img/main-logo.png'


export default function Navbar() {

  return (
    <div>
        {/* HEADER  */}
        <header id="header">

            {/* NAVBAR  */}
            <nav id="navbar">
                {/* LOGO */}
                <div className="nav-logo">
                    <img src={logoImg} alt="Logo Old Dragon" className="logo"></img>
                </div>
                {/* TEXT */}
                <div className="nav-text">
                    <p>Old Dragon - Ficha Online</p>
                </div>
                {/* IDEBAR BTN */}
                <div className="nav-btn" onClick={() => {
                    document.getElementById('menu').classList.toggle('active')
                }}><i><FaBars /></i></div>
            </nav>

        </header>

        {/* SIDEBAR */}
        <nav id="menu">

            <Link className="close" to="/"
                onClick={() => {
                    document.getElementById('menu').classList.toggle('active')
                }}
            >&times;</Link>
            <h2>Desenvolvedor</h2>

            <ul>

                <li>
                    <h3>Matheus Duarte dos Santos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur aliquet mi, et vehicula ligula feugiat quis. Ut sit amet tempor nunc. Integer sagittis iaculis blandit.</p>
                    <i className="facebook"><FaFacebook /></i>
                    <i className="linkedin"><FaLinkedin /></i>
                    <i className="github"><FaGithub /></i>
                </li>

                {/* <li>
                    <h3>Marllon Silveira Juan</h3>
                    <p>Aliquam vehicula tristique risus sed rhoncus. Phasellus ut tempor tellus, a molestie magna. Etiam non tortor dignissim, convallis erat vel, faucibus metus.</p>
                    <i><FaFacebook /></i>
                    <i><FaLinkedin /></i>
                    <i><FaGithub /></i>
                </li> */}

            </ul>
        </nav>
    </div>
  )
}