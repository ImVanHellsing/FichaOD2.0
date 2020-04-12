// Main Imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch, FaPlus, FaEdit, FaPrint } from 'react-icons/fa';

import api from '../../services/api';

// Styles
import '../../assets/css/externalStyles.scss';
import { Button, InputHome } from '../../assets/css/global-components';
import { Main } from './styles';

// Components / Assets Imports
import Navbar from '../../components/NavbarHome/navbar';
import Footer from '../../components/Footer/footer';
import MainBg from '../../assets/img/bg-main.jpg';

export default function Home() {
	const [id_file, setId_file] = useState('');

	const history = useHistory();

	async function handleSearch(e) {
		e.preventDefault();

		try {
			const res = await api.get(`profile?id=${id_file}`);
			const answer = `${id_file} carregado...`;
			const p = document.getElementById('server-answer');
			p.innerHTML = answer;
			p.style.display = 'inline-block';

			localStorage.setItem('id_file', id_file);
			console.log(id_file);

			alert('A sua ficha foi carregada!');
		} catch (err) {
			alert('Falha ao encontrar sua ficha, tente novamente!');
		}
	}

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

				<Main>
					<section
						id='one'
						onMouseOver={() => {
							document.getElementById('one').style.gridColumn = '1/4';
							document.getElementById('two').style.gridColumn = '4/5';
						}}
						onMouseLeave={() => {
							document.getElementById('one').style.gridColumn = '1/3';
							document.getElementById('two').style.gridColumn = '3/5';
						}}
					>
						<Button
							className='btn btn-secundary'
							id='plus'
							onClick={() => {
								history.push('/fichamanagement');
							}}
						>
							<i>
								<FaPlus />
							</i>
							Nova Ficha
						</Button>
					</section>

					<section
						id='two'
						onMouseOver={() => {
							document.getElementById('two').style.gridColumn = '2/5';
							document.getElementById('one').style.gridColumn = '1/2';
						}}
						onMouseLeave={() => {
							document.getElementById('two').style.gridColumn = '3/5';
							document.getElementById('one').style.gridColumn = '1/3';
						}}
					>
						<form>
							<div>
								<InputHome
									id='search'
									className='imp-secundary'
									type='text'
									name='search'
									placeholder='Procurar uma ficha...'
									value={id_file}
									onChange={e => setId_file(e.target.value)}
								/>
								<i onClick={handleSearch}>
									<FaSearch />
								</i>
							</div>

							<div id='buttons'>
								<Button className='btn btn-secundary'>
									<i>
										<FaEdit />
									</i>{' '}
									Editar
								</Button>

								<Button className='btn btn-secundary'>
									<i>
										<FaPrint />
									</i>
									Imprimir
								</Button>
							</div>

							<div>
								<p id='server-answer'></p>
							</div>
						</form>
					</section>
				</Main>

				<Footer />
			</div>
		</React.Fragment>
	);
}
