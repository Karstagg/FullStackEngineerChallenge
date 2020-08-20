import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {GlobalStyle, Layout} from './styles/global.css';
import SignIn from './containers/signin/signin';
import Nav from './containers/nav/nav';
import {UserContext} from './providers/userProvider/userProvider';


const App: React.FC = () => {
  const user = useContext(UserContext)
  return (
  <>
    <GlobalStyle />
    <Router>
      <Nav/>
      <Layout>
        {user ? <Switch>
          <Route path="/">
            <div>user</div>
          </Route>
        </Switch> :
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
