import styled from 'styled-components';

/* Buttons */
export const Button = styled.button`
	color: #fff;
	background-color: #000;
	display: inline-block;
	text-transform: uppercase;
	transition: all 0.3s ease 0s;

	padding: 20px;
	border: none;
	border-radius: 6px;

	&:hover {
		cursor: pointer;
		color: #000;
		background-color: #fff;
		font-weight: bolder;
		letter-spacing: 3px;
		transition: all 0.3s ease 0s;

		-webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
		-moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
		box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
	}

	&.btn-primary {
		color: #fff;
		background: var(--primary-color);

		&:hover {
			color: var(--primary-color);
			background: #fff;
		}
	}

	&.btn-secundary {
		color: #fff;
		background: var(--secundary-color);

		&:hover {
			color: var(--secundary-color);
			background: #fff;
		}
	}

	& i {
		margin-right: 1em;
	}
`;

/* INPUTS */
export const InputHome = styled.input`
	/* General Styles */
	color: #fff;
	font-size: 1em;

	border: none;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	padding: 0.7em;

	&::placeholder {
		color: #fff;
	}

	& + i {
		color: #fff;
		font-size: 1em;
		padding: 0.7em;
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
		margin-left: auto;
	}

	& + i:hover {
		cursor: pointer;
	}

	/* Primary Style */
	&.imp-primary {
		background-color: var(--primary-color-transparent);
	}

	&.imp-primary + i {
		background-color: var(--primary-color);
		border: 1px solid var(--primary-color);
	}

	&.imp-primary + i:hover {
		color: var(--primary-color);
		background-color: #fff;
		border: 1px solid #fff;
	}

	/* Secundary Style */
	&.imp-secundary {
		background-color: var(--secundary-color-transparent);
	}

	&.imp-secundary + i {
		background-color: var(--secundary-color);
		border: 1px solid var(--secundary-color);
	}

	&.imp-secundary + i:hover {
		color: var(--secundary-color);
		background-color: #fff;
		border: 1px solid #fff;
	}
`;
export const Input = styled.input``;

export const TextArea = styled.textarea``;
