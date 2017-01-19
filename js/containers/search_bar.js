// React
import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ""
		};
	}
	handleChange(e) {
		let selected = e.target.id;
		console.log(selected)
	}
	render(){
		return (
			<div id="search-bar">
				<form>
					<span>TV</span>
				  <input 
				  	onChange={e => this.handleChange(e)}
				  	id="tv" 
				  	type="radio" 
				  	name="select" 
				  	value="tv"
				  	defaultChecked
				  	 />
				  	 <span>MOVIES</span>
				  <input 
					  onChange={e => this.handleChange(e)} 
					  id="movie" 
					  type="radio" 
					  name="select" 
					  value="movies" />
				</form>
				<input 
					value={this.state.term}
					onChange={e => this.onInputChange(e.target.value)} />
				<div id="search-results">
				</div>
			</div>
		);
	}
	onInputChange(term) {
		this.setState({term});
		//this.props.onSearchTermChange(term);
		console.log(this.state.term);
	}

}


export default SearchBar;



