import React, { Component } from 'react';
import { Link } from 'react-router';
export default class SubMenu extends Component {
    hideSub(){
    let sm = document.querySelector('.sub-menu');
    sm.style.display = "none";
  }
  render(){
    return(
        <div className="sm-tv sub-menu">
          <div className="centeringDiv">
              <ul>
                <li className="menu-item">
                  <Link to="/movieOverview/popular" onClick={this.hideSub.bind(this)}>
                    Popular
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to='/movieOverview/playing' onClick={this.hideSub.bind(this)}>
                    Now Playing
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/movieOverview/topRated" onClick={this.hideSub.bind(this)}>
                    Top Rated
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/movieOverview/upcoming" onClick={this.hideSub.bind(this)}>
                    Upcoming
                  </Link>
                </li>
              </ul>
          </div>
        </div>
    )
  }
}