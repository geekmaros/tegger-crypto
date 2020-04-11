import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from "./pages/homepage/homepage.component";
import './App.sass';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/' component={HomePage}/>
        </Switch>

    </div>
  );
}

export default App;
