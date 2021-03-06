// React
import React, { PropTypes, Component } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import { fetchNowPlayingMovies } from "../actions/index.js";

// Containers/Components
import { MovieDetails } from "./movie_details.js"
import SearchBar from "./search_bar"

// React Router
import {Router, Route, Link, hashHistory } from 'react-router';


export class MovieOverviewPlaying extends Component {
	
	componentWillMount() {
		if(this.props.fetchNowPlayingMovies) {
			this.props.fetchNowPlayingMovies();
		}
	}
	
	renderMovies(movieList){
	
		return(
		
		<article key={Math.random()} className="movieThumb">
		
			<Link to={`/movieDetails/${movieList.id}`}>{movieList.backdrop_path === null ? <img src="img/no_image.png"></img> : <img src={"https://image.tmdb.org/t/p/w500_and_h281_bestv2/" + movieList.backdrop_path}></img>}</Link>

			<section className="info">
				
				<section className="topInfo">
					<Link to={`/movieDetails/${movieList.id}`}><h2>{movieList.title}</h2></Link>
					<h3>{movieList.release_date}</h3>
				</section>
				
				<section className="bottomInfo">
					<h3><font color="#cc0000">&#x2764;</font> {movieList.vote_count}</h3>
					<h3>Average vote: {movieList.vote_average}</h3>
				</section>

			</section>
		</article>

		)
	}

	render(){
		
		return (
			<div>
			<SearchBar />
				<div className="fullPage centeringDiv">
					<h1>Movies Now Playing</h1>
					<div className="movieContainer">
						{this.props.movies.map(this.renderMovies)}
					</div>
		
				</div>
			</div>
			
		)
	}
	
}



function mapStateToProps(state){
	return { movies: state.movies };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({fetchNowPlayingMovies}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieOverviewPlaying);