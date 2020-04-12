import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from "./pages/homepage/homepage.component";
import CryptoPage from "./pages/crypto/crypto.component";
import './App.sass';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/assets/:id' component={CryptoPage}/>
        </Switch>

    </div>
  );
}

export default App;
