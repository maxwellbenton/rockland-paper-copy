import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

render() {
  // <li><Link to="/blog">Blog</Link></li>
  // <li><Link to="/resume">Resume</Link></li>
  //           <li><Link to="/cv">CV</Link></li>
  //           <li><Link to="/contact">Contact</Link></li>
  return (
    <div className="navigation">
        <ul>
            <li><Link to="/">Maxwell Benton</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            
            
        </ul>
    </div>
  )
}
  
}
