// React
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import { fetchMovieDetails } from "../actions/index.js";


// Containers/Components
import TvOverview from "./tv_overview";

// React Router
import {Router, Route, Link, hashHistory } from 'react-router';


class TvDetails extends Component {
	
	componentWillMount() {
		// this.props.fetchPopularMovies();
		// this.props.fetchUpcomingMovies();
		// this.props.fetchNowPlayingMovies();
		//this.props.fetchTopRatedMovies();
		this.props.fetchTvDetails(this.props.params.tvId);

	}

	renderMovieDetails(){
	
			return(
			
			<div>Tv Details</div>
	
			)
	}

	render(){

		 if(this.props.tvDetails[0]){
			console.log(this.props.tvDetails[0].title)
		} 
	
		return (
			<div className="fullPage">
				<h1>Header Title</h1>
				
				<div className="movieContainer">
					{this.renderTvDetails.bind(this)}
				</div>
	
			</div>
		)
	}

}


function mapStateToProps(state){
	return { movieDetails: state.tvDetails };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({fetchTvDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TvDetails);