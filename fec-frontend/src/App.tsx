import React from 'react';
import {GlobalStyle, Layout} from './styles/global.css';
import SignIn from './containers/signin/signin';

const App: React.FC = () => {
  return <>
    <GlobalStyle />
    <Layout>
      <SignIn/>
    </ Layout>
  </>
}

export default App;
