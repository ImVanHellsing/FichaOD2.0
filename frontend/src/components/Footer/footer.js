import React from 'react';
import { FooterDiv, Container, Inner, About, Copyright  } from './styles'

export default function Footer() {

    return (
        <FooterDiv>
            <Container>
                <Inner>
                    <About>
                        <h5>Sobre</h5>
                        <p>Projeto idealizado para facilitar a criação e editação de fichas de personagem do cenário Old Dragon. Desenvolvido para treinar e testar conhecimentos de criação de layouts e formulários, criação de um servidor local com acesso à banco de dados. Validação de formulários com AJAX/Fetch e manipulação de dados com JSON.</p>
                    </About>
                    <Copyright>
                        <p>&copy; Ficha Edtável de Old Dragon. All rights reserved.</p>
                    </Copyright>
                </Inner>
            </Container>
        </FooterDiv>
    )
}