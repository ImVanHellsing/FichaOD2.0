import { createGlobalStyle } from 'styled-components'

const GlobalStylesGeneric = createGlobalStyle`

    /* BOX SIZING */
    html {
        -webkit-box-sizing: border-box;
           -moz-box-sizing: border-box;
                box-sizing: border-box;
    }

    *, *:before, *:after {
        -webkit-box-sizing: border-box;
           -moz-box-sizing: border-box;
                box-sizing: border-box;
    }

    a,a:visited {
        color: #fff;
        text-decoration: none;
    }
    a:hover {
        cursor: pointer;
    }

    h1,h2,h3,h4,h5{
        font-family: 'MedievalSharp', cursive;
    }

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, 
    address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, 
    u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, 
    td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, 
    section, summary, time, mark, audio, video {

        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    img{
        /* max-width: 100%;
        max-height: 100%; */
        display: block;
    }
`
export default GlobalStylesGeneric