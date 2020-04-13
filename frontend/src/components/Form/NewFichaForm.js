import React, { Component } from 'react';

//Steps IMPORT
import CaracterData from './CaracterData.js';
import AttributeSetting from './AttributeSetting';
import Confirmation from './Confirmation';
import Sucess from './Sucess';

export class NewFichaForm extends Component {
	//States
	state = {
		step: 1,
		char_name: '',
		player_name: '',
		char_race: '',
		char_class: '',
		char_level: 0,
		char_alignment: '',
		char_description: '',
		strength: 1,
		dexterity: 1,
		constitution: 1,
		intelligence: 1,
		wisdow: 1,
		charisma: 1,
	};

	//Next Step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};

	//Prev Step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	//Handle fields change
	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;

		const {
			char_name,
			player_name,
			char_race,
			char_class,
			char_level,
			char_alignment,
			char_description,
		} = this.state;

		const values = {
			char_name,
			player_name,
			char_race,
			char_class,
			char_level,
			char_alignment,
			char_description,
		};

		switch (step) {
			case 1:
				return (
					<CaracterData
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);

			case 2:
				return (
					<AttributeSetting
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);

			case 3:
				return (
					<Confirmation
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values={values}
					/>
				);

			case 4:
				return <Sucess />;
		}
	}
}

export default NewFichaForm;
