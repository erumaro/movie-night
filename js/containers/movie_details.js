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
				let i = 0;
				let j = 0;
				let k = 0;
				let releaseDate = this.props.movieDetails[0].release_date;
				let year = this.props.movieDetails[0].release_date.substring(0,4);

				let genres = "";
				let productionCompanies = "";
				let productionCountries = "";
				

				let genreArr =  this.props.movieDetails[0].genres;
				let productionCompaniesArr = this.props.movieDetails[0].production_companies;
				let productionCountriesArr = this.props.movieDetails[0].production_countries;

				let genre = genreArr.forEach((genre) => {
					i !== genreArr.length - 1 ? genres += (genre.name + ", ") : genres += genre.name;
					i++;
				}) 

				let company = productionCompaniesArr.forEach((company) => {
					j !== productionCompaniesArr.length - 1 ? productionCompanies += (company.name + ", ") : productionCompanies += company.name;
					j++;
				}) 

				let country = productionCountriesArr.forEach((country) => {
					k !== productionCountriesArr.length - 1 ? productionCountries += (country.name + ", ") : productionCountries += country.name;
					k++;
				}) 
			return(
			<div id="detail-wrapper">
				<div id="detail-container">
					{/*<Link to={"/"}><img src="../img/arrow_back.png" /></Link>*/}
					<figure>
						<img src={"https://image.tmdb.org/t/p/w500/" + this.props.movieDetails[0].poster_path}  alt="poster"/>
					</figure>
					<section>
						<h1>{this.props.movieDetails[0].title + " (" + year + ")"}</h1>
						<span>{genres}</span>
						<h2>Overview</h2>
						<p>
							{this.props.movieDetails[0].overview}
						</p>
						<h2>Facts for geeks</h2>
						<p className="facts">Release Date: {releaseDate}</p>
						<p className="facts">Countries: {productionCountries}</p>
						<p className="facts">Production Companies: {productionCompanies}</p>
						<p className="facts">Vote Avg: {this.props.movieDetails[0].vote_average}</p>
						<p className="facts">Vote Count: {this.props.movieDetails[0].vote_count}</p>
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