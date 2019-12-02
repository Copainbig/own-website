import { hot } from 'react-hot-loader';
import React from 'react'
import PropTypes from 'prop-types';

const App = () =><h1>Soon...</h1>; 

App.propTypes = { 
  message: PropTypes.string 
}; 

export default hot(module)(App);