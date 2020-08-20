import React, {useContext} from 'react'
import {NavContainer, NavTitle} from './styles.nav';
import {Link} from "react-router-dom"
import {signOut} from '../../firebase';
import {UserContext} from '../../providers/userProvider/userProvider';

const Nav: React.FC = () => {
  const user = useContext(UserContext)
  console.log(user)
  return <NavContainer>
    <NavTitle>Reviewer</NavTitle>
    <Link onClick={user && signOut} to='/'>{user ? 'Sign Out' : 'Sign In'}</Link>
  </NavContainer>
}

export default Nav
