import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { HeaderDiv, NavbarDiv, NavText, NavBtn, Dots } from './styles';

class NavbarForm extends Component {
   redirectToHome = () => {
      const { history } = this.props;
      if (history) history.push('/');
   };

   render() {
      const { history } = this.props;

      return (
         <React.Fragment>
            {/* NavBar */}
            <HeaderDiv>
               <NavBtn>
                  <FaArrowLeft className="icon" onClick={this.redirectToHome} />
               </NavBtn>

               <NavText>
                  <p>Crie a sua Ficha</p>
               </NavText>

               {/* </NavbarDiv> */}
            </HeaderDiv>
         </React.Fragment>
      );
   }
}
export default withRouter(NavbarForm);
