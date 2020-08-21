import styled, { createGlobalStyle } from 'styled-components'
import {Link} from 'react-router-dom';

export const bg = '#272823'
export const color = '#ffffff'
export const accent = '#e64172'

export const Layout = styled.div`
  display: grid;
  width: 100vw;
  min-height: 80vh;
  grid-row-gap: 20px;
`
export const Title = styled.span`
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`
export const Button = styled.button`
  outline: none;
  background: transparent;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
  :disabled {
    cursor: not-allowed;
  }
  color: ${color};
`

export const Card = styled(Link)`
  width: 100%;
  height: 100%;
  display: grid;
  box-shadow: 
    5px 5px 7px 0 rgba(0, 0, 0, 0.25),
    -2px -2px 4px 0 rgba(255, 255, 255, 1);
`

export const FormContainer = styled.div`
  justify-self: center;
  width: 90%;
  height: 50%;
  min-height: 200px;
  margin-top: 50px;
  display: grid;
  justify-items: center;
  grid-template-columns: 50% 50%;
  @media(max-width: 750px) {
    grid-template-columns: 100%;
  }
  box-shadow: 
    5px 5px 7px 0 rgba(0, 0, 0, 0.25),
    -2px -2px 4px 0 rgba(255, 255, 255, 1);
`
export const Form = styled.div`
  width: 90%;
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  align-items: center;
`
export const FormItem = styled.label`
  display: grid;
  justify-items: start;
  grid-template-columns: 8% auto;
  width: 100%;
  grid-column-gap: 10px;
  @media(max-width: 750px) {
    grid-template-columns: 15% auto;
  }
`
export const FormInput = styled.input`
  width: auto;
  border: 1px solid white;
`
export const AddButton = styled(Button)`
  width: 50%;
  height: 50%;
  font-size: 1.5rem;
  justify-self: center;
  align-self: center;
  @media(max-width: 750px) {
    height: 90%;
  }
`

export const CardArea = styled.div`
  width: 90%;
  display: grid;
  justify-self: center;
  grid-template-columns: repeat(auto-fit, 20%);
  grid-row-gap: 20px;
  @media(max-width: 750px) {
    grid-template-columns: repeat(auto-fit, 30%);
    grid-column-gap: 5%;
  }
 
`

export const ItemCard = styled(Card)`
  grid-template-rows: 50% 50%;
  justify-items: center;
  align-items: center;
  max-width: 200px;
  height: 100px;
  justify-self: center;
`
export const ItemCardText = styled.span`
  justify-self: center;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
// @ts-ignore
export const GlobalStyle = createGlobalStyle`

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    color: ${color};
    background-color: ${bg};
    margin: 0;
  }
  
  a {
    color: ${color};
    text-decoration: none;
    :hover {
      color: ${accent};
    }
  }
  
  input {
    color: ${color};
    padding-left: 10px;
    outline: none;
    border: none;
    background-color: ${bg};
    
    :-webkit-autofill,:-webkit-autofill:focus, :-webkit-autofill:hover, :-webkit-autofill:active {
      -webkit-text-stroke-color: ${color};
      -webkit-text-fill-color: ${color};
      -webkit-box-shadow: inset 0 0 0px 9999px ${bg};
    }
  
  
  }

`
