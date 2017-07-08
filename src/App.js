import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import Nav from './Nav'
import Project from './Project'
import Post from './Post'
import Contact from './Contact'
import Resume from './Resume'
import ProjectsList from './ProjectsList'
import BlogPosts from './BlogPosts'

import CV from './CV'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      projects: null,
      posts: null,
    }
    
    this.renderPosts = this.renderPosts.bind()
  }

  

  renderPosts() {
    this.posts.map(post => {
      return <Post post={post}/>
    })
  }
  componentDidMount() {
    // <div id="blog" className="row blog">
    // <BlogPosts posts={this.state.posts} renderPosts={this.renderPosts}/>
    // </div>
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }

  render() {

    return (
      <div className="App">
        <div className="container parallax">
          <div className="header">
            <Nav />
          </div>
          <Switch>
             <Route exact path="/" render={() => {
                return  <div>
                          <div className="row main ">
                            <div className="col-md-4 col-sm-4">
                                <div className="card" >
                                  <img className="card-img-top img-fluid selfie" src="/photos/me.jpg" alt="self shot" />
                                  <div className="card-block">
                                    <h2 className="card-title">Maxwell Benton</h2>
                                    <p className="card-text text-justify">&nbsp; &nbsp;I am a full stack web developer currently looking for opportunities in the tech industry. I have spent the last 4 years developing leaders and teams of 60-100, but found over the years that I love to code.</p>
                                  </div>
                                  
                                  <div className="card-block">
                                    <a href="https://www.linkedin.com/in/maxwellbenton/" className="card-link"><img src="/photos/Logo-2C-66px-TM.png" alt="LinkedIn Account" height="22px"/></a>
                                    <a href="https://github.com/maxwellbenton" className="card-link"><img src="/photos/GitHub_Logo.png" alt="GitHub Account" height="30px"/></a>
                                  </div>
                                </div>
                              
                            </div>
                            <div className="col-md-8 col-sm-8">
                              <div className="curProject">
                                <h4><em>Current Project</em></h4>
                                <div className="card">
                                  <img className="card-img-top img-fluid" width="100%"src="/photos/waittime.png" alt="Card cap" />
                                  <div className="card-block">
                                    <h2 className="card-text">Wait Time</h2>
                                    <p className="card-text text-justify">Wait Time is a user-driven app designed to provide useful feedback to customers and retail companies about the length of checkout lines. The app allows for customers to time how long it takes to be served and to also provide immediate one-line feedback about the experience. A user can view estimated and average wait times for a store, and see how their wait time stacks up against the norm (and if another store is typically faster).</p>
                                    <div className="card-text"><span><a href="https://wait-time-app.herokuapp.com">Demo (in development)</a></span></div>
                                    <p className="card-text"><span><a href="https://github.com/maxwellbenton/wait-time-app">Frontend Repository</a></span>&nbsp;&nbsp;<span><a href="https://github.com/maxwellbenton/wait-time-rails-api">Backend Repository</a></span></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="projects" className="row projects">
                            
                            <ProjectsList projects={this.state.projects} renderProjects={this.renderProjects}/>
                          </div>
                          
                        </div>
              }} />
              <Route exact path="/projects" render={() => <ProjectsList projects={this.state.projects} renderProjects={this.renderProjects}/> } />
              <Route exact path="/blog" render={() => <BlogPosts posts={this.state.posts} renderPosts={this.renderPosts}/> } />
              <Route exact path="/contact" render={() => <Contact /> } />
              <Route exact path="/resume" render={() => <Resume /> } />
              <Route exact path="/cv" render={() => <CV /> } />
          </Switch>
          
        </div>
      </div>
    );
  }
}

export default App;
