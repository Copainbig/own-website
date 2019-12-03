import { hot } from 'react-hot-loader';
import React from 'react'
import PropTypes from 'prop-types';

const App = () =><div data-testid="app-div">Soon...</div>; 

App.propTypes = { 
  message: PropTypes.string 
}; 

export default hot(module)(App);