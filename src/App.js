import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";


// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} /> 
    </> 
    );
}

export default App;
