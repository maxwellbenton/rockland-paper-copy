import React, { Component } from 'react';
import { Item, Container, Divider, Grid, Header } from 'semantic-ui-react';
import Nav from './Nav'
import Main from './Main'
import Services from './Services'
import Contact from './Contact'
import About from './About'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Grid verticalAlign='middle'>  
        <Main style={{height: '100vh'}}/>
        <Services style={{minHeight: '100vh'}}/>
        
        <Divider section />
        
        <Contact />
        <Divider section />
        <About />
        </Grid>
      </div>
    );
  }
}

export default App;