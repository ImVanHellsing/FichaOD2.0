// Main Imports
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaSearch, FaPlus, FaEdit, FaPrint } from 'react-icons/fa'

import api from '../../services/api'

// Styles
import '../../global.css'
import '../Main/styles.css'

// Components / Assets Imports
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function NewFicha() {

    const [id_file, setId_file] = useState('')
    
    const history = useHistory()
    
    async function handleSearch(e) {
        e.preventDefault()
        
        try{
            
            const res = await api.get(`profile?id=${id_file}`)
            const answer = `${id_file} carregado...`
            const p = document.getElementById('server-answer')
            p.innerHTML = answer
            p.style.display = 'inline-block'

            localStorage.setItem("id_file", id_file)
            console.log(id_file)

            alert('A sua ficha foi carregada!')

        }catch(err){
            alert('Falha ao encontrar sua ficha, tente novamente!')
        }
    }

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

                    <button className="btn" id="plus" onClick={() => { history.push('/fichamanagement') }}>
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
                            <input id="search" className="imp-secundary" type="text" name="search" placeholder="Procurar uma ficha..."
                                value={id_file}
                                onChange={ e => setId_file(e.target.value)}
                            />
                            <i onClick={handleSearch}><FaSearch /></i>
                        </div>


                        <div id="buttons">

                            <button className="btn">
                                <i><FaEdit /></i> Editar
                            </button>

                            <button className="btn">
                                <i><FaPrint /></i>Imprimir
                            </button>

                        </div>

                        <div><p id="server-answer"></p></div>

                    </form>

                </section>

            </main>

            <Footer />

        </div>
    )
}   