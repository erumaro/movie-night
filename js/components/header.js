import React, { Component } from 'react';
import { Link } from 'react-router';
import SubMenu from './sub_menu';
import SearchBar from '../containers/search_bar';
export default class Header extends Component {
  showSub(){
    let sm = document.querySelector('.sub-menu');
    sm.style.display = "flex";
  }
  
  render(){
    return(
      <header>
        <div className="centeringDiv">
        <Link to="/">
          <img src="../img/logo.PNG" />
        </Link>
        <nav className="site-navigation">
          <ul>
              <li>
                <Link to="#" onClick={this.showSub.bind(this)}>
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
        <SubMenu />
        <SubMenu />
      </header>
    );
  }
}