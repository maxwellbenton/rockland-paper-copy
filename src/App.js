import React, { Component } from 'react';
import { Item, Container, Divider, Grid, Header, Button, Menu} from 'semantic-ui-react';
import Nav from './Nav'
import Main from './Main'
import Services from './Services'
import Contact from './Contact'
import About from './About'
import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';
import {Route, withRouter} from 'react-router-dom'

let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

class App extends Component {
  state = { activeItem: 'main' }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  componentDidMount =() => {
    
       Events.scrollEvent.register('begin', (to, element) => {
         console.log("begin", arguments);
       });
    
       Events.scrollEvent.register('end', (to, element) => {
         console.log("end", arguments);
       });
    
       scrollSpy.update();
    
     }
     componentWillUnmount = () => {
       Events.scrollEvent.remove('begin');
       Events.scrollEvent.remove('end');
     }
     
     scrollToTop = () => {
       scroll.scrollToTop();
     }
     
     scrollToBottom = () => {
       scroll.scrollToBottom();
     }
     
     scrollTo = () => {
       scroll.scrollTo(100);
     }
     
     scrollMore = () => {
       scroll.scrollMore(100);
     }
     
     handleSetActive = (to) => {
       console.log(to);
     }
     
  render() {
    return (
      <Container>
        
        <Grid verticalAlign='middle'>  
        <Grid.Column computer={16} mobile={16} tablet={16}>
        <Menu inverted>
          <Link to="services" spy={true} smooth={true} duration={500}>
            <Menu.Item name='Services' />
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Menu.Item name='Contact' />
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <Menu.Item name='About' />
          </Link>
        </Menu>
        </Grid.Column>

        <Main />
        
        <Grid.Column computer={16} mobile={16} tablet={16} id="services" className="element">
        <Services style={{minHeight: '100vh'}}/>
        </Grid.Column>

        <Divider section />
        
        
        <Grid.Column computer={16} mobile={16} tablet={16} id="contact" className="element">
          <Contact />
        </Grid.Column>
        
        <Divider section />
        
        <Grid.Column computer={16} mobile={16} tablet={16} id="about" className="element">
          <About />
        </Grid.Column>
        
        <a onClick={this.scrollToTop}>To the top!</a>
        <br/>
        </Grid>
      </Container>
    );
  }
}

export default withRouter(App);