// Main Imports
import React, { useState} from 'react'
// import { useHistory } from 'react-router-dom'
// import { FaSearch, FaPlus, FaEdit, FaPrint } from 'react-icons/fa'

// Styles
import '../../global.css'
import './styles.css'

// Components / Assets Imports
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import MultiStepForm from '../../components/MultStepForm/NewFichaForm'

export default function NewFicha() {

    // const [id_file, setId_file] = useState('')

    // const history = useHistory()

    // async function handleSearch(e) {
    //     e.preventDefault()

    //     try{
    //     }catch(err){
    //     }
    // 

    return (
        <React.Fragment>
            <Navbar />
            <MultiStepForm />
            <Footer />
        </React.Fragment>
    )
}   