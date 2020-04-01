// Main Imports
import React, { useState, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { FaSearch, FaPlus, FaEdit, FaPrint } from 'react-icons/fa'

import api from '../../services/api'

// Styles
import '../../global.css'
import './styles.css'

// Components / Assets Imports
import Navbar from '../../components/navbar'

export default function Main() {

    // const [id_file, setId_file] = useState('')

    // const history = useHistory()

    // async function handleSearch(e) {
    //     e.preventDefault()

    //     try{
    //     }catch(err){
    //     }
    // }

    return (

        <div>
            <Navbar />

            {/* MAIN  */}
            <main>
                
                <section id="one" onMouseOver={() => {
                    document.getElementById('one').style.gridColumn = '1/4'
                    document.getElementById('two').style.gridColumn = '4/5'
                }} onMouseLeave={() => {
                    document.getElementById('one').style.gridColumn = '1/3'
                    document.getElementById('two').style.gridColumn = '3/5'
                }}>

                    <button className="btn" id="plus">
                        <i><FaPlus /></i>Nova Ficha
                    </button>
                    
                </section>
                
                <section id="two" onMouseOver={() => {
                    document.getElementById('two').style.gridColumn = '2/5'
                    document.getElementById('one').style.gridColumn = '1/2'
                }} onMouseLeave={() => {
                    document.getElementById('two').style.gridColumn = '3/5'
                    document.getElementById('one').style.gridColumn = '1/3'
                }}>

                    <form>

                        <div>
                            <input id="search" className="imp-secundary" type="text" name="search" placeholder="Procurar uma ficha..."/>
                            <i><FaSearch /></i>
                        </div>

                        <div><p id="server-answer"></p></div>

                        <div id="buttons">

                            <button className="btn">
                                <i><FaEdit /></i> Editar
                            </button>

                            <button className="btn">
                                <i><FaPrint /></i>Imprimir
                            </button>

                        </div>

                    </form>

                </section>

            </main>

            {/* FOOTER */}
            <footer>

                <div className="container">

                    <div id="inner">

                        <div className="about">
                            <h5>Sobre</h5>
                            <p>Projeto idealizado para facilitar a criação e editação de fichas de personagem do cenário Old Dragon. Desenvolvido para treinar e testar conhecimentos de criação de layouts e formulários, criação de um servidor local com acesso à banco de dados. Validação de formulários com AJAX/Fetch e manipulação de dados com JSON.</p>
                        </div>

                        <div className="copyright">
                            <p>&copy; Ficha Edtável de Old Dragon. All rights reserved.</p>
                        </div>

                    </div>

                </div>

            </footer>

        </div>
    )
}   