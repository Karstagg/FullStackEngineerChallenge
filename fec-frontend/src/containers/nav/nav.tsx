import React from 'react'
import {NavContainer, NavTitle} from './styles.nav';
import {Link} from "react-router-dom"

const Nav: React.FC = () => {
  return <NavContainer>
    <NavTitle>Reviewer</NavTitle>
    <Link to="/">Home</Link>
  </NavContainer>
}

export default Nav
