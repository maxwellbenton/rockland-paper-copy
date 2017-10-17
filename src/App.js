import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Nav from './Nav'
import Main from './Main'
import Services from './Services'
import Contact from './Contact'
import About from './About'

import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Nav />
        <Main />
        <Divider horizontal />
        <Services />
        <Divider horizontal />
        <Contact />
        <Divider horizontal />
        <About />
      </Container>
    );
  }
}

export default App;