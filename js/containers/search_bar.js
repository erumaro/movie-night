// React
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import { fetchSearchResults } from "../actions/index.js";


// React Router
import {Router, Route, Link, hashHistory } from 'react-router';

// let category = this.props.params.menuCategory

class SearchBar extends Component {
	componentDidMount() {
		let initialHeading = document.getElementsByTagName("h1")[0].innerHTML;
	}
	onInputChange(term, initialHeading) {
		
		let heading = document.getElementsByTagName("h1")[0];

		this.props.fetchSearchResults(term);
		
		if(term.length === 0) {
			heading.innerHTML = initialHeading
			location.reload();
		}
		else {
			heading.innerHTML = "Search Results"
		}
	}
	
	render(){
		return (
			<div id="search-bar-wrapper">
				<input 
					type="text" 
					placeholder="Search Movies"
					onChange={e => this.onInputChange(e.target.value, this.initialHeading)} 
					/>
				
			</div>
		)
	}
}


function mapStateToProps(state){
	return { movies: state.movies };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({fetchSearchResults}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);



