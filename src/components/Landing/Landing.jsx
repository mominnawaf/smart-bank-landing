import React, { Component } from 'react';
import './Landing.css';
import { AppBar, IconButton } from '@material-ui/core';
import Logo from '../../assets/logo.png';
import { Work } from '@material-ui/icons';

export default class Landing extends Component {
  render() {
    return <div>
        <AppBar position="static" color="transparent" elevation={0} className="app-bar">
            <div className='nav-container'>
            <div className="nav-links">
            <nav>About</nav>
            <nav>How it works</nav>
            <nav>Contacts</nav>
            </div>
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            <IconButton className='shop-btn' >
                <Work style={{'color': '#6B7275'}} />
            </IconButton>
            </div>
        </AppBar>
    </div>;
  }
}
