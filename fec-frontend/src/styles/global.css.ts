import styled, { createGlobalStyle } from 'styled-components'

export const bg = '#272823'
export const color = '#ffffff'
export const accent = '#e64172'

export const Layout = styled.div`
  display: grid;
  width: 100%;
`
// @ts-ignore
export const GlobalStyle = createGlobalStyle`

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: ${color};
    background-color: ${bg};
  }

`
