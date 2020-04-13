// Main
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'
// import { FaSearch, FaPlus, FaEdit, FaPrint } from 'react-icons/fa'

// Styles
import '../../assets/css/externalStyles.scss';
import {} from './styles';

// Components / Assets
import Navbar from '../../components/NavbarForm/navbar';
import Footer from '../../components/Footer/footer';
import Form from '../../components/Form/NewFichaForm';
import MainBg from '../../assets/img/bg-main.jpg';

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
			<div
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url(${MainBg})`,
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
				}}
			>
				<Navbar />

				<Form />
				{/* <Footer /> */}
			</div>
		</React.Fragment>
	);
}
