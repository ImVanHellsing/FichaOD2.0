import styled from 'styled-components'
import { Device } from '../../assets/css/variables'

export const HeaderDiv = styled.header`
  color: #fff;  
  font-weight: 600;
  background-color: var(--primary-color-transparent); 
`
export const NavbarDiv = styled.nav`
  display: flex;

  @media ${Device.small} {}
  @media ${Device.medium} {}
`
//Nav componentes

  //NavLogo
  export const NavLogo = styled.nav`
    width: 33%;
    
    img{
      object-fit: scale-down;
      width: 70%;
      height: 100%;
    }
  `
  //NavText
  export const NavText = styled.div`
    width: 33%;
    font-size: 3em;
    font-family: 'MedievalSharp', cursive;
    margin: auto 0;

    p{
      text-align: center;
    }

    p:hover{
      color: var(--secundary-color);
    }
  `
  //NavBtn
  export const NavBtn = styled.div`
    width: 33%;
    text-align: end;
    font-size: 2.3em;
    margin-left: auto;
    margin: auto 0;
    
    i:hover{
      color: var(--secundary-color);
      cursor: pointer;
    }
  `
  export const Menu = styled.header`

    div{
      color: #fff;
      width: 400px;
      height: 100%;
      background-color: var(--secundary-color);
      transition: all 400ms linear;
      position: fixed;
      top: 0px;
      padding-top: 2em;
    }

    div.active{
      right: 0px;
    }
    
    div.hidden{
      right: -400px;
    }
    
    .close{
        display: block;
        color: rgba(255, 255, 255);
        list-style: none;

        font-size: 3em;
        font-weight: 900;
        text-align: start;
        
        padding-left: 2.5rem;
        margin: 0  0  .5em 0;
    }

      .close:hover{
          color:  rgb(255, 255, 255,0.5);
          cursor: pointer;
      }

    h2{
        font-size: 2.5em;
        padding: 0 2.5rem;
        margin-bottom: 15px;
    }
`
export const Ul = styled.nav`
	font: inherit;
	font-size: 100%;
  text-align: start;
  vertical-align: baseline;
  list-style: none;

  padding: 0 2.5rem;
	border: 0;

  li{
      margin-top: 5px;
      border-top: .5px solid rgba(255, 255, 255, 0.8);

      h3{
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.7em;
          line-height: 3.5rem;
      }

      p{
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.3em;
          margin-bottom: 1.2em;
      }

      i{
          font-size: 2.5em;
          margin-right: .5rem;
      }
      
          i:hover{
              cursor: pointer;
          }

      .facebook:hover {
          color:#1094F4;
      }
      
      .linkedin:hover {
          color:#283E4A;
      }
      
      .github:hover {
          color: #24292E;
      }
  }
`
// @media screen and (max-width: 1200px){

//   #menu{
//       width: 250px;
//       right: -250px;
//       padding-top: 0.5em;
//   }
//       #menu a.close{
//           font-size: 2em;        
//           padding-left: 1.2rem;
//       }

//       #menu h2{
//           font-size: 1.8em;
//           padding: 0 1.2rem;
//           margin-bottom: 2px;
//       }

//       #menu ul{
//           padding: 0 1.2rem;
//       } 

//           #menu ul li h3{
//               font-size: 1.2em;
//           }

//               #menu ul li p{
//                   font-size: 1em;
//               }

//                   #menu ul li p a{
//                       font-size: 1.5em;
//                       margin-right: .5rem;
//                   }
// }

// @media screen and (max-width: 1100px){

//   #menu{
//       width: 230px;
//       right: -230px;
//       padding-top: 0.3em;
//   }
//       #menu a.close{
//           font-size: 1.5em;        
//           padding-left: 1rem;
//       }

//       #menu h2{
//           font-size: 1.5em;
//           padding: 0 1rem;
//           margin-bottom: 1.5px;
//       }

//       #menu ul{
//           padding: 0 1rem;
//       } 

//           #menu ul li h3{
//               font-size: 1.1em;
//           }

//               #menu ul li p{
//                   font-size: .8em;
//               }

//                   #menu ul li p a{
//                       font-size: 1.5em;
//                       margin-right: .5rem;
//                   }
// }         
// @media screen and (max-width: 800px){

//   #menu{
//       width: 200px;
//       right: -200px;
//   }

//       #menu a.close{
//           font-size: 1em;
//       }

//       #menu h2{
//           height: auto;
//           font-size: 1em;
//       }

//       #menu ul{
//           padding: 0 1rem;
//       } 

//           #menu ul li h3{
//               font-size: 0.7em;
//           }

//               #menu ul li p{
//                   font-size: 0.5em;
//               }
              
//                   #menu ul li p a{
//                       font-size: 1.5em;
//                       margin-right: .5rem;
//                   }
// }         