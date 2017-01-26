import React, { Component } from 'react';
import { Link } from 'react-router';
export default class SubMenu extends Component {
  render(){
    return(
        <div id="cat-movie" className="sub-menu">
          <div className="centeringDiv">
              <ul>
                <li className="menu-item">
                  <Link to="/movieOverview/popular" onClick={this.setState({toggleMovie: false})}>
                    Popular
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to='/movieOverview/playing' onClick={this.setState({toggleMovie: false})}>
                    Now Playing
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/movieOverview/topRated" onClick={this.setState({toggleMovie: false})}>
                    Top Rated
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/movieOverview/upcoming" onClick={this.setState({toggleMovie: false})}>
                    Upcoming
                  </Link>
                </li>
              </ul>
          </div>
        </div>
    )
  }
}