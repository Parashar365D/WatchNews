import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeLink: "News"
    };
  }

  handleLinkClick = (linkName) => {
    this.setState({ activeLink: linkName });
  };

  render() {
    return (
      <nav className="navBar fixed-top nav-pills nav-fill">
        <ul className="nav nav-tab" >
          <li className="nav-item">
            <Link className={`nav-link ${this.state.activeLink === 'News' ? 'active' : ''}`} aria-current="page" onClick={() => this.handleLinkClick('News')}
              to="/WatchNews">News</Link>
          </li>
          <li className="nav-item dropdown-center">
            <Link className="nav-link dropdown-toggle" to="/category" data-bs-toggle="dropdown" aria-expanded="false">Category</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/general">General</Link></li>
              <li><Link className="dropdown-item" to="/health">Health</Link></li>
              <li><Link className="dropdown-item" to="/science">Science</Link></li>
              <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
              <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
              <li><Link className="dropdown-item" to="/business">Business</Link></li>
              <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${this.state.activeLink === 'Contact Us' ? 'active' : ''}`} aria-current="page" onClick={() => this.handleLinkClick('Contact Us')} to="/contact_us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
