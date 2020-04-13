import React, { Component } from 'react';
import { FaArrowRight } from 'react-icons/fa';

//Styles
import { Button, TittleForm } from '../../assets/css/global-components';
import '../../assets/css/externalStyles.scss';

export class CaracterData extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { values, handleChange } = this.props;

		return (
			<div className='row'>
				<TittleForm>Dados Básicos</TittleForm>
				<div id='names'>
					<span>
						<input
							class='gate'
							id='char_name'
							type='text'
							name='char_name'
							placeholder='Baragor...'
							onChange={handleChange('char_name')}
							defaultValue={values.char_name}
						/>
						<label for='char_name'>Personagem</label>
					</span>
					<span>
						<input
							class='gate'
							id='player_name'
							type='text'
							name='player_name'
							placeholder='Fulano...'
							onChange={handleChange('player_name')}
							defaultValue={values.player_name}
						/>
						<label for='player_name'>Jogador</label>
					</span>
				</div>
				<span>
					<select
						class='slide-up'
						id='char_race'
						name='char_race'
						type='text'
						onChange={handleChange('char_race')}
						defaultValue={values.char_race}
					>
						<option value='dwarf'>Anão</option>
						<option value='elf'>Elfo</option>
						<option value='human'>Humano</option>
						<option value='halfling'>Halfling</option>
					</select>
					<label for='char_race'>Raça</label>
				</span>

				<span>
					<select
						class='slide-up'
						id='char_class'
						name='char_class'
						type='text'
						onChange={handleChange('char_class')}
						defaultValue={values.char_class}
					>
						<option value='cleric'>Clérigo</option>
						<option value='man of arms'>Homem de Armas</option>
						<option value='mage'>Mago</option>
						<option value='thief'>Ladrão</option>
					</select>
					<label for='char_class'>Classe</label>
				</span>

				<span>
					<select
						class='slide-up'
						id='char_alignment'
						name='char_alignment'
						type='text'
						onChange={handleChange('char_alignment')}
						defaultValue={values.char_alignment}
					>
						<option value='lawful'>Ordeiro</option>
						<option value='neutral'>Neutro</option>
						<option value='caotic'>Caótico</option>
					</select>
					<label for='char_alignment'>Alinhamento</label>
				</span>

				<span>
					<textarea
						class='basic-slide'
						name='char-description'
						id='char_description'
						name='char_description'
						cols='75'
						rows='3'
						onChange={handleChange('char_description')}
						defaultValue={values.char_description}
					></textarea>
					<label for='char_description'>Características</label>
				</span>

				<div className='buttonsDiv' style={{ textAlign: 'center' }}>
					<Button className='btn btn-special' onClick={this.continue}>
						<i>
							<FaArrowRight />
						</i>
						Continuar
					</Button>
				</div>
			</div>
		);
	}
}

export default CaracterData;
