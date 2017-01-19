// React
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import { fetchPopularMovies } from "../actions/index.js";
import { fetchUpcomingMovies } from "../actions/index.js";
import { fetchNowPlayingMovies } from "../actions/index.js";
import { fetchTopRatedMovies } from "../actions/index.js";

// Containers/Components
import { MovieDetails } from "./movie_details.js"
import SearchBar from './search_bar.js';

// React Router
import {Router, Route, Link, hashHistory } from 'react-router';

// let category = this.props.params.menuCategory

class MovieOverview extends Component {
	
	componentWillMount() {
		// this.props.fetchPopularMovies();
		// this.props.fetchUpcomingMovies();
		// this.props.fetchNowPlayingMovies();
		this.props.fetchTopRatedMovies();
		
		// Hämta "Category" från Router test
		// this.props.category();
	}

	renderMovies(movieList){
	
			return(
			
			<article key={Math.random()} className="movieThumb">
			
				{movieList.backdrop_path === null ? <img src="../img/no_image.png"></img> : <img src={"https://image.tmdb.org/t/p/w500_and_h281_bestv2/" + movieList.backdrop_path}></img>}

				<section className="info">
					
					<section className="topInfo">
						<Link to={`/movieDetails/${movieList.id}`}><h2>{movieList.title}</h2></Link>
						<h3>{movieList.release_date}</h3>
					</section>
					
					<section className="bottomInfo">
						<h3>#Votes: {movieList.vote_count}</h3>
						<h3>Average vote: {movieList.vote_average}</h3>
					</section>
	
				</section>
			</article>
	
			)
	}

	render(){

		/* if(this.props.movies[0]){
			console.log("https://image.tmdb.org/t/p/w500_and_h281_bestv2/" + this.props.movies[1].backdrop_path)
		} */
	
		return (
			<div className="fullPage centeringDiv">
				<SearchBar />
				<h1>Header Title</h1>
				
				<div className="movieContainer">
					{this.props.movies.map(this.renderMovies)}
				</div>
	
			</div>
		)
	}

}


function mapStateToProps(state){
	return { movies: state.movies };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({fetchPopularMovies, fetchUpcomingMovies, fetchNowPlayingMovies, fetchTopRatedMovies}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieOverview);



//  asjdkasljd </Link>