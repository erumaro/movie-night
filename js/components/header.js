import React, { Component } from 'react';
import { Link } from 'react-router';
import SubMenu from './sub_menu';
import SearchBar from '../containers/search_bar';
export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            toggleMovie: false,
            toggleTv: false
        };
    }
  render(){
    const catMovie = document.getElementById('cat-movie');
    const catTv = document.getElementById('cat-tv');
    return(
      <header>
        <div className="centeringDiv">
        <Link to="/">
          <img src="../img/logo.PNG" />
        </Link>
        <nav className="site-navigation">
          <ul>
              <li>
                <Link to="#" onClick={this.setState({toggleMovie: true})}>
                  Film
                </Link>
              </li>
              <li>
                <Link to="#">
                  TV
                </Link>
              </li>
          </ul>
        </nav>
        </div>
        { this.state.toggleMovie ? <SubMenu /> : null }
      </header>
    );
  }
}