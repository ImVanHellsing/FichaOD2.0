import React, { Component } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

//Styles
import { Button, TittleForm } from '../../assets/css/global-components';
import '../../assets/css/externalStyles.scss';

export class AttributeSetting extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values, handleChange } = this.props;

		return (
			<div className='row'>
				<TittleForm>Atributos</TittleForm>
				<div id='level-setting' className='default'>
					<span style={{ display: 'block', fontSize: '1.2em' }}>
						(O seu level interferirá em alguns atributos!)
					</span>

					<span>
						<input
							class='swing small'
							id='char_level'
							type='number'
							name='char_level'
							min='0'
							max='20'
							onChange={handleChange('char_level')}
							defaultValue={values.char_level}
							style={{ textIndent: '5em' }}
						/>
						<label for='char_level'>Level</label>
					</span>
				</div>

				<div id='content' style={{ textAlign: 'start' }}>
					<div className='atribute'>
						<span className='default'>
							<input
								class='gate small'
								id='strength'
								type='number'
								name='strength'
								min='1'
								max='18'
								onChange={handleChange('strength')}
								defaultValue={values.strength}
								style={{ textIndent: '5.5em' }}
							/>
							<label for='strength'>Força</label>
						</span>

						<span>
							<input
								class='slide-up'
								id='atkBonus'
								name='atkBonus'
								defaultValue={values.atkBonus}
								value={values.atkBonus}
								style={{ textIndent: '9em' }}
							></input>
							<label for='atkBonus'>Bônus de Ataque</label>
						</span>

						<span>
							<input
								class='slide-up'
								id='cargo'
								name='cargo'
								defaultValue={values.cargo}
								value={values.cargo}
								style={{ textIndent: '6em' }}
							></input>
							<label for='cargo'>Carga</label>
						</span>
					</div>

					<div className='atribute'>
						<span className='default'>
							<input
								class='gate small'
								id='dexterity'
								type='number'
								name='dexterity'
								min='1'
								max='18'
								onChange={handleChange('dexterity')}
								defaultValue={values.dexterity}
								style={{ textIndent: '6em' }}
							/>
							<label for='dexterity'>Destreza</label>
						</span>

						<span>
							<input
								class='slide-up'
								id='dexBonus'
								name='dexBonus'
								defaultValue={values.dexBonus}
								value={values.dexBonus}
								style={{ textIndent: '7.5em' }}
							></input>
							<label for='dexBonus'>Ajuste</label>
						</span>

						<span>
							<input
								class='slide-up'
								id='thief_atr'
								name='thief_atr'
								defaultValue={values.thief_atr}
								value={values.thief_atr}
								style={{ textIndent: '5em' }}
							></input>
							<label for='thief_atr'>Ladino</label>
						</span>
					</div>

					<div className='atribute'>
						<span className='default'>
							<input
								class='gate small'
								id='constitution'
								type='number'
								name='constitution'
								min='1'
								max='18'
								onChange={handleChange('constitution')}
								defaultValue={values.constitution}
								style={{ textIndent: '6.5em' }}
							/>
							<label for='constitution'>Constituição</label>
						</span>

						<span>
							<input
								class='slide-up'
								id='conBonus'
								name='conBonus'
								defaultValue={values.conBonus}
								value={values.conBonus}
								style={{ textIndent: '9em' }}
							></input>
							<label for='conBonus'>Bônus de Vida</label>
						</span>

						<span>
							<input
								class='slide-up'
								id='ressurect'
								name='ressurect'
								defaultValue={values.ressurect}
								value={values.ressurect}
								style={{ textIndent: '8.5em' }}
							></input>
							<label for='ressurect'>% Ressureição</label>
						</span>
					</div>

					<div className='atribute'>
						<span className='default'>
							<input
								class='gate small'
								id='intelligence'
								type='number'
								name='intelligence'
								min='1'
								max='18'
								onChange={handleChange('intelligence')}
								defaultValue={values.intelligence}
								style={{ textIndent: '6em' }}
							/>
							<label for='intelligence'>Inteligência</label>
						</span>

						<span>
							<input
								class='slide-up small'
								id='languages'
								name='languages'
								defaultValue={values.languages}
								value={values.languages}
								style={{ textIndent: '6em' }}
							></input>
							<label for='languages'>Idiomas</label>
						</span>

						<span>
							<input
								class='slide-up small'
								id='learnMagic'
								name='learnMagic'
								defaultValue={values.learnMagic}
								value={values.learnMagic}
								style={{ textIndent: '6.5em' }}
							></input>
							<label for='learnMagic'>% Aprender</label>
						</span>

						<span>
							<input
								class='slide-up small'
								id='magicBonus'
								name='magicBonus'
								defaultValue={values.magicBonus}
								value={values.magicBonus}
								style={{ textIndent: '5.5em' }}
							></input>
							<label for='magicBonus'>+ Magias</label>
						</span>
					</div>

					<div className='atribute'>
						<span className='default'>
							<input
								class='gate small'
								id='wisdow'
								type='number'
								name='wisdow'
								min='1'
								max='18'
								onChange={handleChange('wisdow')}
								defaultValue={values.wisdow}
								style={{ textIndent: '6em' }}
							/>
							<label for='wisdow'>Sabedoria</label>
						</span>

						<span>
							<input
								class='slide-up'
								id='protection'
								name='protection'
								defaultValue={values.protection}
								value={values.protection}
								style={{ textIndent: '8em' }}
							></input>
							<label for='protection'>Proteção</label>
						</span>

						<span>
							<input
								class='slide-up'
								id='miracles'
								name='miracles'
								defaultValue={values.miracles}
								value={values.miracles}
								style={{ textIndent: '8em' }}
							></input>
							<label for='miracles'>+ Milagres</label>
						</span>
					</div>

					<div className='atribute'>
						<span className='default'>
							<input
								class='gate small'
								id='charisma'
								type='number'
								name='charisma'
								min='1'
								max='18'
								onChange={handleChange('charisma')}
								defaultValue={values.charisma}
								style={{ textIndent: '6em' }}
							/>
							<label for='charisma'>Carisma</label>
						</span>

						<span>
							<input
								class='slide-up small'
								id='followers'
								name='followers'
								defaultValue={values.followers}
								value={values.followers}
								style={{ textIndent: '6.5em' }}
							></input>
							<label for='followers'>Seguidores</label>
						</span>

						<span>
							<input
								class='slide-up small'
								id='reaction'
								name='reaction'
								defaultValue={values.reaction}
								value={values.reaction}
								style={{ textIndent: '5em' }}
							></input>
							<label for='reaction'>Reação</label>
						</span>

						<span>
							<input
								class='slide-up small'
								id='undeads'
								name='undeads'
								defaultValue={values.undeads}
								value={values.undeads}
								style={{ textIndent: '5.5em' }}
							></input>
							<label for='undeads'>Undeads</label>
						</span>
					</div>
				</div>

				<div className='buttonsDiv' style={{ textAlign: 'center' }}>
					<Button
						className='btn btn-secundary'
						onClick={this.back}
						style={{ marginRight: '1em' }}
					>
						<i>
							<FaArrowLeft />
						</i>
						Voltar
					</Button>
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

export default AttributeSetting;
