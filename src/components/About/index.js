import {Component} from 'react'
import './index.css'

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
          className="img"
          alt="about"
        />
        <h1 className="heading">About</h1>
        <p className="description">
          I love to create! I am a frontend web developer
        </p>
      </div>
    )
  }
}
export default About
