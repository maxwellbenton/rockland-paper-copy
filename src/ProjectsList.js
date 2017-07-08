import React, {Component} from 'react'
import Slider from 'react-slick'
import Project from './Project'

var settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}
    
export default class ProjectsList extends Component {
  
  
  
  
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <Slider {...settings}>
          <div className="projectSlide">
            <h3><a href="https://mixd-in-app.herokuapp.com/">Mixd.in</a></h3>
            <div style={{height: '300px', lineHeight:'300px'}}><img style={{width: '50%', margin: 'auto', verticalAlign: 'middle'}} src="/photos/mixd-in-logo.png" alt="mixd in" /></div>
            <div>
              <ul>
                <li>Pairs React.js front-end with a Rails API</li>
                <li>Provides timed interval based recipe instructions</li>
              </ul>
            </div>
          </div>
          <div className="projectSlide">
            <h3><a href="https://rails-study-space.herokuapp.com/">Study Space</a></h3>
            <div style={{height: '300px', lineHeight:'300px'}}><img style={{width: '50%', margin: 'auto', verticalAlign: 'middle'}} src="/photos/study-space-logo.png" alt="study space" /></div>
          <div>
            <ul>
              <li>Uses embeded maps with for study locations</li>
              <li>Created custom analytics for popular locations</li>
              
            </ul>
          </div>
          </div>
          <div className="projectSlide">
            <h3><a href="https://wait-time-app.herokuapp.com/">Wait Time</a></h3>
            <div style={{height: '300px', lineHeight:'300px'}}><img style={{width: '50%', margin: 'auto', verticalAlign: 'middle'}} src="/photos/wait_time_logo.png" alt="wait time" /></div>
            <div>
              <ul>
                <li>Utilizes location data to fetch local store data</li>
                <li>Integrates Google Maps and Chart.js functionality</li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}