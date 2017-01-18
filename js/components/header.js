import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render(){
    return(
      <header>
        <div className="centeringDiv">
        <img src="../img/logo.PNG" />
        <nav className="site-navigation">
          <ul>
            <li><a className="current-overview" href="#">Film</a></li>
              <ul>
                <li className="menu-item">
                  <Link to="/movieOverview/popular">
                    Popular
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to='/movieOverview/nowPlaying'>
                    Now Playing
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/movieOverview/topRated">
                    Top Rated
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/movieOverview/upcoming">
                    Upcoming
                  </Link>
                </li>
              </ul>
            <li><a href="#">TV</a></li>
              <ul>
                <li className="menu-item">
                  <Link to="/tvOverview/popular">
                    Popular
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/tvOverview/nowPlaying">
                    Now Playing
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/tvOverview/topRated">
                    Top Rated
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/tvOverview/upcoming">
                    Upcoming
                  </Link>
                </li>
              </ul>
          </ul>
        </nav>
        </div>
      </header>
    );
  }
}