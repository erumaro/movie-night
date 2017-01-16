// React
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import { fetchMovieDetails } from "../actions/index.js";


// Containers/Components
import MovieOverview from "./movie_overview";
// React Router
import {Router, Route, Link, hashHistory } from 'react-router';


class MovieDetails extends Component {
	
	componentWillMount() {
		// this.props.fetchPopularMovies();
		// this.props.fetchUpcomingMovies();
		// this.props.fetchNowPlayingMovies();
		//this.props.fetchTopRatedMovies();
		this.props.fetchMovieDetails(this.props.params.movieId);

	}

	renderMovieDetails(){
	
			return(
			
			<div>Movie Details</div>
	
			)
	}

	render(){

		 if(this.props.movieDetails[0]){
			console.log(this.props.movieDetails[0].title)
		} 
	
		return (
			<div className="fullPage">
				<h1>Header Title</h1>
				
				<div className="movieContainer">
					{this.renderMovieDetails.bind(this)}
				</div>
	
			</div>
		)
	}

}


function mapStateToProps(state){
	return { movieDetails: state.movieDetails };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({fetchMovieDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);