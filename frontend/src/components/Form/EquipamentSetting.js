import React, { Component } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

//Styles
import { Button, TittleForm } from '../../assets/css/global-components';
import '../../assets/css/externalStyles.scss';

export class EquipamentSetting extends Component {
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
			<React.Fragment>
				<h1>Equipament</h1>
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
			</React.Fragment>
		);
	}
}

export default EquipamentSetting;
