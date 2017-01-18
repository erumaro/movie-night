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
		this.props.fetchMovieDetails(this.props.params.id);

	}

	renderMovieDetails(){
			
			if(this.props.movieDetails[0]){
				let releaseDate = this.props.movieDetails[0].release_date;
				let genres = "";
				let i = 0;
				let genreArr =  this.props.movieDetails[0].genres;
				let genre = genreArr.forEach((genre) => {
					i !== genreArr.length - 1 ? genres += (genre.name + ", ") : genres += genre.name;
					i++;
				}) 
			return(
			<div id="detail-wrapper">
				<div id="detail-container">
					<Link to={"/"}><img src="../img/arrow_back.png" /></Link>
					<figure>
						<img src={"https://image.tmdb.org/t/p/w500/" + this.props.movieDetails[0].poster_path}  alt="poster"/>
					</figure>
					<section>
						<h1>{this.props.movieDetails[0].title}</h1>
						<span>{genres}</span>
						<h2>Overview</h2>
						<p>
							Lorem ipsum dolor sit amet, nemore impedit assueverit ut his, his nibh solum mnesarchum ex. Eum posse partem platonem cu, vel oportere scripserit ad. Ut eos electram abhorreant, per te rebum meliore blandit, vis choro evertitur consequuntur ex. Audire appareat his ne, ex eum rebum ridens sensibus. Altera hendrerit cu sea, his in detraxit theophrastus, affert civibus pro id.

Nec ut dolor urbanitas, ut quodsi lobortis vituperata pro. Duo ferri erroribus hendrerit ne, at nostro viderer mel, et facete appetere mea. His ea integre expetenda, harum oblique vivendo ei mel, eos an dolor accusamus. Vel ut viderer iracundia, stet offendit id vel. Ceteros dissentiet et sea. Nullam eligendi ei quo, ea debet aperiri vix.

Mea cu vivendo perfecto reformidans, ea illud fugit dicant vix, melius intellegam definitionem eum at. Ne laoreet probatus nominati mel. Errem salutandi no has, in verear molestie nec. No has hinc ullum officiis. Dicam quaestio complectitur mei te, habeo perfecto molestiae est no, vix ceteros dissentiunt an. Vim oratio nostrum scriptorem no.

						</p>
						<h2>Facts for geeks</h2>
						<p>Release: {releaseDate}</p>
						<p>Vote Avg: {this.props.movieDetails[0].vote_average}</p>
						<p>Vote Count: {this.props.movieDetails[0].vote_count}</p>
					</section>
				</div>	
			
			</div>
	
			)
		}
		else {
			<div>Loading movies...</div>
		}
	}

	render(){

		 if(this.props.movieDetails[0]){
			console.log(this.props.movieDetails[0].title)
			} 
	
		return (
			<div className="fullPage">
				<h1>Header Title</h1>
				
				<div className="movieContainer">
					{this.renderMovieDetails()}
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