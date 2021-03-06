import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Redirect, Switch, Route
} from "react-router-dom";
import {GlobalStyle, Layout} from './styles/global.css';
import SignIn from './containers/signin/signin';
import Nav from './containers/nav/nav';
import Admin from './containers/admin/admin';
import {UserContext} from './providers/userProvider/userProvider';
import EmployeeInfo from './containers/employeeInfo/employeeInfo';


const App: React.FC = () => {
  const user = useContext(UserContext).user
  return (
  <>
    <GlobalStyle />
    <Router>
      <Nav/>
      <Layout>
        {user ? <>
          <Redirect to="/admin" />
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/employee-info">
              <EmployeeInfo />
            </Route>
          </Switch>
        </> :
            <>
              <Redirect to="/sign-in" />
              <SignIn />
            </>
        }
      </ Layout>
    </Router>
  </>
  )
}

export default App;
