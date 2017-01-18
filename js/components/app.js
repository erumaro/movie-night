// React
import React, { Component } from "react";

// Containers & Components
import MovieOverviewPopular from '../containers/movie_overview_popular.js'
import MovieOverviewUpcoming from '../containers/movie_overview_upcoming.js'
import MovieOverviewPlaying from '../containers/movie_overview_playing.js'
import MovieOverviewToprated from '../containers/movie_overview_toprated.js'

import Header from '../components/header.js'

export default class App extends Component {

		render(){
			return (
				<div>
					<Header />
					{this.props.children} 
				</div>
			)
		}

}