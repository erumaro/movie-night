import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchBar from '../containers/search_bar';
export default class Header extends Component {
  render(){
    return(
      <header>
        <div className="centeringDiv">
        <img src="../img/logo.PNG" />
        <nav className="site-navigation">
          <ul>
              <li>
                <Link to="/movieOverview/#">
                  Film
                  <div className="sub-menu">
                      <div className="centeringDiv">
                          <ul>
                            <li className="menu-item">
                              <Link to="/movieOverview/popular">
                                Popular
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to='/movieOverview/playing'>
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
                      </div>
                </div>
                </Link>
              </li>
              <li>
                <Link to="/tvOverview/#">
                  TV
                    <div className="sub-menu">
                      <div className="centeringDiv">
                          <ul>
                            <li className="menu-item">
                              <Link to="/tvOverview/popular">
                                Popular
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/tvOverview/playing">
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
                      </div>
                </div>
                </Link>
              </li>
          </ul>
        </nav>
        </div>
        
      </header>
    );
  }
}