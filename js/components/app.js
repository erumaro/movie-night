// React
import React, { Component } from "react";

// Containers & Components
import MovieOverview from '../containers/movie_overview.js'
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