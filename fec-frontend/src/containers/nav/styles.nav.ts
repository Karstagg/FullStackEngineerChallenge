import styled from 'styled-components'
import {Title} from '../../styles/global.css'

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 20% 70%;
  @media (max-width: 750px) {
    grid-template-columns: 35% 60%;
  }
  justify-items: end;
  align-items: center;
  width: 100%;
  height: 80px;
  box-shadow: 0px 3px 6px 0 rgba(0, 0, 0, 1);
`
export const NavTitle = styled(Title)`
  justify-self: center;
`
