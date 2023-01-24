import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
          className="img"
          alt="home"
        />
        <h1 className="heading">Home</h1>
      </div>
    )
  }
}
export default Home
