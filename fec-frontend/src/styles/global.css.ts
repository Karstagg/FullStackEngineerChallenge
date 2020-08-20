import styled, { createGlobalStyle } from 'styled-components'

export const bg = '#272823'
export const color = '#ffffff'
export const accent = '#e64172'

export const Layout = styled.div`
  display: grid;
  width: 100vw;
  min-height: 80vh;
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
