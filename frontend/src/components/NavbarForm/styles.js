import styled from 'styled-components';
import { Device } from '../../assets/css/variables';

export const HeaderDiv = styled.header`
   color: #fff;
   font-weight: 600;
   background-color: transparent;

   padding: 1em 1.5em;
`;
export const NavbarDiv = styled.nav`
   @media ${Device.small} {
   }
   @media ${Device.medium} {
   }
`;
//Nav componentes

//NavText
export const NavText = styled.div`
   width: 100%;
   display: block;
   font-size: 3em;
   font-family: 'MedievalSharp', cursive;
   margin: auto 0;

   p {
      text-align: center;
      color: var(--secundary-color);
   }
`;
//NavBtn
export const NavBtn = styled.div`
   width: 100%;
   display: block;
   position: absolute;
   top: 0;
   font-size: 3em;

   padding: 0.5em 0;

   .icon:hover {
      color: var(--secundary-color);
      cursor: pointer;
   }
`;
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
