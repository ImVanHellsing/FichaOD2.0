import styled from 'styled-components'
import { Device } from '../../assets/css/variables'

import Bg1 from '../../assets/img/bg1.jpg'
import Bg2 from '../../assets/img/bg3.jpg'

/* MAIN */
export const Main = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr); 

    background: black 
                no-repeat 
                top 
                cover;

    transition: all 1s;

    margin:  0;
    border:  0;
    padding: 0;

    #one, #two {
        width: 100%;
        display: inline-block;
        text-align: center;
        transition: all 1s;

        background: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 15em 0;
        margin: 0;
        border: 0;
    }
    
    /* ONE */
    #one {
        background-image: url(${Bg1});
        grid-column: 1/3;
    }

    /* TWO */
    #two {
        background-image: url(${Bg2});
        grid-column: 3/5;
    }

        #two #server_answer{
            display: none;
            color: #ffffff;
            background: var(--secundary-color-transparent);

            padding: 20px;
            border: none;
            border-radius: 6px;
            margin-top: 1em;
        }

        #two div:first-child {
            display: block;
            margin-bottom: 1em;
        }
        
            #two div:last-child {
                margin-bottom: 0;
            }

                #two #buttons button{
                    display: inline-block;
                }

                    #two #buttons button:last-child{
                        margin-left: .5em;
                    }
                    
    @media ${Device.small}{

        &, #one, #two{
            display: block;
            width: 100%;
        }
    }
`