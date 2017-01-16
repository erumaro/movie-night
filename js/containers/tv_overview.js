// React
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import { fetchPopularTV } from "../actions/index.js";
import { fetchUpcomingTV } from "../actions/index.js";
import { fetchPlayingTV } from "../actions/index.js";
import { fetchTopRatedTV } from "../actions/index.js";

// Containers/Components
import { MovieDetails } from "./movie_details.js"

// React Router
import {Router, Route, Link, hashHistory } from 'react-router';

// Other
import moment from "moment"

class TvOverview extends Component {
	
	componentWillMount() {
		// this.props.fetchPopularTV();
		// this.props.fetchUpcomingTV();
		this.props.fetchPlayingTV();
		// this.props.fetchTopRatedTV();
	}

	renderTv(tvList){
	
			return(
			
			<article key={Math.random()} className="movieThumb">
			
				{tvList.backdrop_path === null ? <img src="../img/no_image.png"></img> : <img src={"https://image.tmdb.org/t/p/w500_and_h281_bestv2/" + tvList.backdrop_path}></img>}

				<section className="info">
					
					<section className="topInfo">
						<Link to={`/TvDetails/${tvList.id}`}><h2>{tvList.name}</h2></Link>
						<h3>{tvList.first_air_date}</h3>
					</section>
					
					<section className="bottomInfo">
						<h3><font color="#cc0000">&#x2764; </font> {tvList.vote_count}</h3>
						<h3><font color="#000">&#x271A;</font> {tvList.vote_average}</h3>
					</section>
	
				</section>
			</article>
	
			)
	}

	render(){

		return (
			<div className="fullPage">
				<h1>Airing today</h1>
				
				<div className="movieContainer">
					{this.props.tv.map(this.renderTv)}
				</div>
	
			</div>
		)
	}

}


function mapStateToProps(state){
	return { tv: state.tv };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators ({fetchPopularTV, fetchUpcomingTV, fetchPlayingTV, fetchTopRatedTV}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TvOverview);

// 