import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            className="wave-logo"
            alt="Wave"
          />
          <p>Wave</p>
          <ul className="options-container">
            <li>
              <Link className="option-name" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="option-name" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="option-name" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Header
