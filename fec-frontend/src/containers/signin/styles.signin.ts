import styled from 'styled-components'
import {Button} from '../../styles/global.css';

export const SignInForm = styled.div`
  justify-self: center;
  width: 40%;
  max-width: 400px;
  min-width: 200px;
  align-self: center;
  display: grid;
  grid-template-rows: 120px 40px;
  @media(max-width: 750px) {
    width: 90%;
  }
`
export const SignInFormItem = styled.label`
  display: grid;
  justify-self: center;
  grid-template-columns: 15% 85%;
  font-size: 1.5rem;
  @media(max-width: 500px){
    grid-template-columns: 100%;
    text-align: center;
    grid-row-gap: 20px;
    height: 90px;
  }
 
  width: 100%;
  align-items: center;
  height: 50px;
`
export const SignInFormInput = styled.input`
  height: 100%;
  font-size: 1.5rem;
  @media(max-width: 750px) {
    text-align: center;
  }
`
export const SignInButton = styled(Button)`
  width: 50%;
  justify-self: center;
`
