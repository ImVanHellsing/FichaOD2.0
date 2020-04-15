import React, { Component } from 'react';

//Steps IMPORT
import CaracterData from './CaracterData.js';
import AttributeSetting from './AttributeSetting';
import EquipamentSetting from './EquipamentSetting';
import Confirmation from './Confirmation';
import Sucess from './Sucess';

export class NewFichaForm extends Component {
	//States
	state = {
		//steps
		step: 1,

		//Caracter Data
		char_name: '',
		player_name: '',
		char_race: '',
		char_class: '',
		char_level: 0,
		char_alignment: '',
		char_description: '',

		//Main Attributes
		strength: 1,
		dexterity: 1,
		constitution: 1,
		intelligence: 1,
		wisdow: 1,
		charisma: 1,

		//Sub Attributes
		atkBonus: '0',
		cargo: '0',

		dexBonus: '0',
		thief_atr: '0',

		conBonus: '0',
		ressurect: '0',

		languages: '0',
		learnMagic: '0',
		magicBonus: '0',

		protection: '0',
		miracles: '0',

		followers: '0',
		reaction: '0',
		undeads: '0',
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
	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
		switch (input) {
			case 'strength':
				switch (e.target.value) {
					case '1':
						this.setState({
							atkBonus: '-5',
							cargo: '1/2/5',
						});
						break;
					case ('2', '3'):
						this.setState({
							atkBonus: '-4',
							cargo: '3/5/15',
						});
						break;
					case ('4', '5'):
						this.setState({
							atkBonus: '-3',
							cargo: '5/8/25',
						});
						break;
					case ('6', '7'):
						this.setState({
							atkBonus: '-2',
							cargo: '12/15/35',
						});
						break;
					case ('8', '9'):
						this.setState({
							atkBonus: '-1',
							cargo: '15/25/45',
						});
						break;
					case ('10', '11'):
						this.setState({
							atkBonus: '0',
							cargo: '19/30/58',
						});
						break;
					case ('12', '13'):
						this.setState({
							atkBonus: '+1',
							cargo: '25/40/75',
						});
						break;
					case ('14', '15'):
						this.setState({
							atkBonus: '+2',
							cargo: '33/50/100',
						});
						break;
					case ('16', '17'):
						this.setState({
							atkBonus: '+3',
							cargo: '43/70/130',
						});
						break;
					case ('18', '19'):
						this.setState({
							atkBonus: '+4',
							cargo: '58/90/175',
						});
						break;
					case '20':
						this.setState({
							atkBonus: '+5',
							cargo: '75/120/230',
						});
						break;
				}
				break;

			case 'dexterity':
				switch (e.target.value) {
					case '1':
						this.setState({
							dexBonus: '-5',
							thief_atr: '-25%',
						});
						break;
					case ('2', '3'):
						this.setState({
							dexBonus: '-4',
							thief_atr: '-20%',
						});
						break;
					case ('4', '5'):
						this.setState({
							dexBonus: '-3',
							thief_atr: '-15%',
						});
						break;
					case ('6', '7'):
						this.setState({
							dexBonus: '-2',
							thief_atr: '-10%',
						});
						break;
					case ('8', '9'):
						this.setState({
							dexBonus: '-1',
							thief_atr: '-5%',
						});
						break;
					case ('10', '11'):
						this.setState({
							dexBonus: '0',
							thief_atr: '+0%',
						});
						break;
					case ('12', '13'):
						this.setState({
							dexBonus: '+1',
							thief_atr: '0/+5%/0',
						});
						break;
					case ('14', '15'):
						this.setState({
							dexBonus: '+2',
							thief_atr: '0/+10%/+5%',
						});
						break;
					case ('16', '17'):
						this.setState({
							dexBonus: '+3',
							thief_atr: '+5%/+15%/+10%',
						});
						break;
					case ('18', '19'):
						this.setState({
							dexBonus: '+4',
							thief_atr: '+10%/+20%/+15%',
						});
						break;
					case '20':
						this.setState({
							dexBonus: '+5',
							thief_atr: '+15%/+25%/+20%',
						});
						break;
				}
				break;

			case 'constitution':
				switch (e.target.value) {
					case '1':
						this.setState({
							conBonus: '-5',
							ressurect: '0%',
						});
						break;
					case ('2', '3'):
						this.setState({
							conBonus: '-4',
							ressurect: '0%',
						});
						break;
					case ('4', '5'):
						this.setState({
							conBonus: '-3',
							ressurect: '0%',
						});
						break;
					case ('6', '7'):
						this.setState({
							conBonus: '-2',
							ressurect: '1%',
						});
						break;
					case ('8', '9'):
						this.setState({
							conBonus: '-1',
							ressurect: '5%',
						});
						break;
					case ('10', '11'):
						this.setState({
							conBonus: '0',
							ressurect: '10%',
						});
						break;
					case ('12', '13'):
						this.setState({
							conBonus: '+1',
							ressurect: '25%',
						});
						break;
					case ('14', '15'):
						this.setState({
							conBonus: '+2',
							ressurect: '50%',
						});
						break;
					case ('16', '17'):
						this.setState({
							conBonus: '+3',
							ressurect: '75%',
						});
						break;
					case ('18', '19'):
						this.setState({
							conBonus: '+4',
							ressurect: '95%',
						});
						break;
					case '20':
						this.setState({
							conBonus: '+5',
							ressurect: '100%',
						});
						break;
				}
				break;

			case 'intelligence':
				switch (e.target.value) {
					case '1':
						this.setState({
							languages: '-05',
							learnMagic: '0%',
							magicBonus: '0',
						});
						break;
					case ('2', '3'):
						this.setState({
							languages: '0',
							learnMagic: '0%',
							magicBonus: 'null',
						});
						break;
					case ('4', '5'):
						this.setState({
							languages: '0',
							learnMagic: '0%',
							magicBonus: 'null',
						});
						break;
					case ('6', '7'):
						this.setState({
							languages: '0',
							learnMagic: '0%',
							magicBonus: 'null',
						});
						break;
					case ('8', '9'):
						this.setState({
							languages: '0',
							learnMagic: '0%',
							magicBonus: 'null',
						});
						break;
					case ('10', '11'):
						this.setState({
							languages: '0',
							learnMagic: '0%',
							magicBonus: 'null',
						});
						break;
					case ('12', '13'):
						this.setState({
							languages: '0',
							learnMagic: '0%',
							magicBonus: 'null',
						});
						break;
					case ('14', '15'):
						this.setState({
							languages: '1',
							learnMagic: '25%',
							magicBonus: '0',
						});
						break;
					case ('16', '17'):
						this.setState({
							languages: '2',
							learnMagic: '35%',
							magicBonus: '+1-1º',
						});
						break;
					case ('18', '19'):
						this.setState({
							languages: '3',
							learnMagic: '45%',
							magicBonus: '+2-1º',
						});
						break;
					case '20':
						this.setState({
							languages: '4',
							learnMagic: '55%',
							magicBonus: '+1-2º +2-1º',
						});
						break;
				}
				break;

			case 'wisdow':
				switch (e.target.value) {
					case '1':
						this.setState({
							protection: '-5',
							miracles: '0',
						});
						break;
					case ('2', '3'):
						this.setState({
							protection: '-4',
							miracles: '0',
						});
						break;
					case ('4', '5'):
						this.setState({
							protection: '-3',
							miracles: '0',
						});
						break;
					case ('6', '7'):
						this.setState({
							protection: '-2',
							miracles: '0',
						});
						break;
					case ('8', '9'):
						this.setState({
							protection: '-1',
							miracles: '0',
						});
						break;
					case ('10', '11'):
						this.setState({
							protection: '0',
							miracles: '0',
						});
						break;
					case ('12', '13'):
						this.setState({
							protection: '+1',
							miracles: '0',
						});
						break;
					case ('14', '15'):
						this.setState({
							protection: '+2',
							miracles: '0',
						});
						break;
					case ('16', '17'):
						this.setState({
							protection: '+3',
							miracles: '+1-1º',
						});
						break;
					case ('18', '19'):
						this.setState({
							protection: '+4',
							miracles: '+2-1º',
						});
						break;
					case '20':
						this.setState({
							protection: '+5',
							miracles: '+2-2º +1-2º',
						});
						break;
				}
				break;

			case 'charisma':
				switch (e.target.value) {
					case '1':
						this.setState({
							followers: '0',
							reaction: '-25%',
							undeads: '0',
						});
						break;
					case ('2', '3'):
						this.setState({
							followers: '0',
							reaction: '-20%',
							undeads: '0',
						});
						break;
					case ('4', '5'):
						this.setState({
							followers: '0',
							reaction: '-15%',
							undeads: '0',
						});
						break;
					case ('6', '7'):
						this.setState({
							followers: '0',
							reaction: '-10%',
							undeads: '0',
						});
						break;
					case ('8', '9'):
						this.setState({
							followers: '0',
							reaction: '-5%',
							undeads: '1',
						});
						break;
					case ('10', '11'):
						this.setState({
							followers: '1',
							reaction: '0%',
							undeads: '1d2',
						});
						break;
					case ('12', '13'):
						this.setState({
							followers: '2',
							reaction: '+5%',
							undeads: '1d3',
						});
						break;
					case ('14', '15'):
						this.setState({
							followers: '3',
							reaction: '+10%',
							undeads: '1d4',
						});
						break;
					case ('16', '17'):
						this.setState({
							followers: '4',
							reaction: '+15%',
							undeads: '1d6',
						});
						break;
					case ('18', '19'):
						this.setState({
							followers: '5',
							reaction: '+20%',
							undeads: '1d8',
						});
						break;
					case '20':
						this.setState({
							followers: '6',
							reaction: '+25%',
							undeads: '2d4',
						});
						break;
				}
				break;

			default:
				console.log('[Input] Not found');
				break;
		}
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

			strength,
			dexterity,
			constitution,
			intelligence,
			wisdow,
			charisma,

			atkBonus,
			cargo,

			dexBonus,
			thief_atr,

			conBonus,
			ressurect,

			languages,
			learnMagic,
			magicBonus,

			protection,
			miracles,

			followers,
			reaction,
			undeads,
		} = this.state;

		const values = {
			char_name,
			player_name,
			char_race,
			char_class,
			char_level,
			char_alignment,
			char_description,

			strength,
			dexterity,
			constitution,
			intelligence,
			wisdow,
			charisma,

			atkBonus,
			cargo,

			dexBonus,
			thief_atr,

			conBonus,
			ressurect,

			languages,
			learnMagic,
			magicBonus,

			protection,
			miracles,

			followers,
			reaction,
			undeads,
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
					<EquipamentSetting
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values={values}
					/>
				);

			case 4:
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
