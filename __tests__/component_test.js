import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';
import { shallow, render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MovieDetails } from '../js/containers/movie_details';
import { MovieOverviewPlaying } from '../js/containers/movie_overview_playing';
import { MovieOverviewPopular } from '../js/containers/movie_overview_popular';
import { MovieOverviewToprated } from '../js/containers/movie_overview_toprated';
import { MovieOverviewUpcoming } from '../js/containers/movie_overview_upcoming';
import { SearchBar } from '../js/containers/search_bar';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import * as types from "../js/constants/ActionTypes.js";
import ReactTestUtils from 'react-addons-test-utils';
import { createStore } from 'redux' 
import thunk from 'redux-thunk';
import { stub } from 'sinon';
import sinon from 'sinon';
import reducers from '../js/reducers';

describe('components', function() {
	describe('<SearchBar />', function() {

    	it('renders correctly', function() {
    		const tree = renderer.create(<SearchBar movies={fromJS({})} />).toJSON();
      		expect(tree).toMatchSnapshot();
    	});

    	it('calls onchange event and calls fetchSearchResults', () => {
    		 const props = {
		       fetchSearchResults: (term) => { return term}
		    };

		    spyOn(props, 'fetchSearchResults');
		    props.fetchSearchResults('')

    		const wrapper = shallow(<SearchBar {...props}/>); 
    		wrapper.instance().onInputChange('')

    		expect(props.fetchSearchResults).toHaveBeenCalled()
       	});
    });

    describe('<MovieDetails />', function() {
    	
    	it('renders correctly', function() {
    		
    		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<MovieDetails movieDetails={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });
    describe('<MovieOverviewPlaying />', function() {
    	
    	it('renders correctly', function() {
    		
    		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<MovieOverviewPlaying movies={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });
    describe('<MovieOverviewPopular />', function() {
    	
    	it('renders correctly', function() {
    		
    		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<MovieOverviewPopular movies={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });
    describe('<MovieOverviewToprated />', function() {
    	
    	it('renders correctly', function() {
    		 		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<MovieOverviewToprated movies={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	
    	
    });
    describe('<MovieOverviewUpcoming />', function() {
    	
    	it('renders correctly', function() {
    		 		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<MovieOverviewUpcoming movies={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	
    	
    });
});

    
