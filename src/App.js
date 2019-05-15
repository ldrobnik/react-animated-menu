import React from 'react';
import {Route} from 'react-router-dom';
import Home from './containers/Home/Home';

function App() {
  return (
    <Route path='/' component={Home}/>
  );
}

export default App;
