import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className="nav" >
        <a href="#">Home</a>
        <a href="#contact">Contact</a>
      </div>

      )
 }
}


export default NavBar;
