import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchBar from '../containers/search_bar';

export default class Header extends Component {
  constructor(props){
      super(props);
    this.state = {
      showMovieSubMenu: false,
      showTvSubMenu: false,
    }
    
    this.toggleClickMovie = this.toggleClickMovie.bind(this);
    this.toggleClickTv = this.toggleClickTv.bind(this);
  }
  toggleClickMovie(){
    this.setState(prevState => ({
      showMovieSubMenu: !prevState.showMovieSubMenu
    }));
  }
  toggleClickTv(){
    this.setState(prevState => ({
      showTvSubMenu: !prevState.showTvSubMenu
    }));
  }
  render(){
    const showHideMovie = {
      'display': this.state.showMovieSubMenu ? 'flex' : 'none'
    };
    const showHideTv = {
      'display': this.state.showTvSubMenu ? 'flex' : 'none'
    }
    return(
      <header>
        <div className="centeringDiv">
        <img src="../img/logo.PNG" />
        <nav className="site-navigation">
          <ul>
              <li>
                <Link to="#" onClick={this.toggleClickMovie}>
                  Film
                </Link>
              </li>
              <li>
                <Link to="#" onClick={this.toggleClickTv}>
                  TV
                </Link>
              </li>
          </ul>
        </nav>
        </div>
        <nav id="cat-movie" className="sub-menu" style={showHideMovie}>
          <div className="centeringDiv">
              <ul>
                <li className="menu-item">
                  <Link to="/movieOverview/popular" onClick={this.toggleClickMovie}>
                    Popular
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to='/movieOverview/playing' onClick={this.toggleClickMovie}>
                    Now Playing
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/movieOverview/topRated" onClick={this.toggleClickMovie}>
                    Top Rated
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/movieOverview/upcoming" onClick={this.toggleClickMovie}>
                    Upcoming
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
        <nav id="cat-tv" className="sub-menu" style={showHideTv}>
          <div className="centeringDiv">
              <ul>
                <li className="menu-item">
                  <Link to="/tvOverview/popular" onClick={this.toggleClickTv}>
                    Popular
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to='/tvOverview/playing' onClick={this.toggleClickTv}>
                    Now Playing
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/tvOverview/topRated" onClick={this.toggleClickTv}>
                    Top Rated
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/tvOverview/upcoming" onClick={this.toggleClickTv}>
                    Upcoming
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
      </header>
    );
  }
}