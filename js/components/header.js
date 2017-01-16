import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render(){
    return(
      <header>
        <img src="../img/logo.PNG" />
        <nav className="site-navigation">
          <ul>
            <li>Film</li>
              <ul>
                <li className="menu-item">
                  <Link to="/movieOverview/">
                    Popular
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="...">
                    Now Playing
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="...">
                    Top Rated
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="...">
                    Upcoming
                  </Link>
                </li>
              </ul>
            <li>TV</li>
              <ul>
                <li className="menu-item">
                  <Link to="...">
                    Popular
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="...">
                    Now Playing
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="...">
                    Top Rated
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="...">
                    Upcoming
                  </Link>
                </li>
              </ul>
          </ul>
        </nav>
      </header>
    );
  }
}