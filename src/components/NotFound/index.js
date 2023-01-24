import {Component} from 'react'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="notFound-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          className="img"
          alt="not-found"
        />
        <h1 className="heading">Not Found</h1>
      </div>
    )
  }
}
export default NotFound
