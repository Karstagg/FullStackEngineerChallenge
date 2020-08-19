import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {GlobalStyle, Layout} from './styles/global.css';
import SignIn from './containers/signin/signin';
import Nav from './containers/nav/nav';


const App: React.FC = () => {
  return <>
    <GlobalStyle />
    <Router>
      <Nav/>
      <Layout>
        <Switch>
          <Route path="/sign-in">
            <SignIn/>
          </Route>
        </Switch>
      </ Layout>
    </Router>
  </>
}

export default App;
