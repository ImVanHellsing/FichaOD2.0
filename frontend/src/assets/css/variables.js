import { createGlobalStyle } from 'styled-components';

const size = {
	small: '800px',
	medium: '1360px',
	large: '1920px',
};

const GlobalStylesVariables = createGlobalStyle`

    :root{
    /* COLORS */

        /* PRIMARY */
        --primary-color: rgb(255, 0, 0);

        --primary-color-transparent: rgba(255, 0, 0, 0.25);

        /* SECUNDARY */
        --secundary-color: #D8B784;
        
        --secundary-color-shadow: rgb(180, 108, 0);
        --secundary-color-strong: rgb(128, 77, 0);
        
        --secundary-color-transparent: rgba(216, 182, 132, 0.8);
        --secundary-color-transparent2: rgba(216, 182, 132, 0.5);
        --secundary-color-transparent3: rgba(216, 182, 132, 0.3);

        /* TERCIARY */
        --terciary-color: #377d6a;
        
        --terciary-color-light: #7ab893;
    }
`;

export const Device = {
	small: `screen and (max-width: ${size.small})`,
	medium: `screen and (max-width: ${size.medium})`,
	large: `screen and (max-width: ${size.large})`,
};

export default GlobalStylesVariables;
