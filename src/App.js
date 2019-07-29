import React from 'react';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";


// import logo from './logo.svg';
import './App.css';

function App() {
  return <>
  <Home />
  <Rooms />
  <SingleRoom />
  <Error />
  </>;
}

export default App;
