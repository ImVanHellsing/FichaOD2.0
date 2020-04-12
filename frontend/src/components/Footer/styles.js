import styled from 'styled-components'
import { Device } from '../../assets/css/variables'

export const FooterDiv = styled.footer`
  color: #fff;
  background-color: var(--primary-color-transparent);
`
export const Container = styled.div`
  max-width: 85%;
  margin: 0 auto;
`
export const Inner = styled.div`
  text-align: center;
  padding: 4em 0;

  @media ${Device.small} {

    & {
      padding: 3em 0;
    }
  }
`
export const Copyright = styled.div`
  display: block;
  font-size: 1.2rem;
  margin-top: 2em;
  padding: 0;
  text-align: center;
`
export const About = styled.div`
  width: 45%;
  display: inline-block;
  text-align: start;

  h5, p {
    letter-spacing: .8px;
    margin-bottom: .8em;
  }

  h5 {
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'MedievalSharp', cursive;
  }

  @media ${Device.small}{}
`