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
import { SearchBarTv } from '../js/containers/search_bar_tv';
import { TvDetails } from '../js/containers/tv_details';
import { TvOverviewPlaying } from '../js/containers/tv_overview_playing';
import { TvOverviewPopular } from '../js/containers/tv_overview_popular';
import { TvOverviewToprated } from '../js/containers/tv_overview_toprated';
import { TvOverviewUpcoming } from '../js/containers/tv_overview_upcoming';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import * as types from "../js/constants/ActionTypes.js";
import ReactTestUtils from 'react-addons-test-utils';
import { createStore } from 'redux' 
import { stub } from 'sinon';
import sinon from 'sinon';
import reducers from '../js/reducers';

describe('Components', function() {
	
  describe('Searchbar', function() {

    	it('should render correctly', function() {
    		const tree = renderer.create(<SearchBar movies={fromJS({})} />).toJSON();
      		expect(tree).toMatchSnapshot();
    	});

    	it('should call onchange event and call fetchSearchResults', () => {
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

    // MOVIE ----------------------------

    describe('Movie Details', function() {
    	it('should render correctly', function() {
        const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieDetails movieDetails={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });


    describe('Movies Playing', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieOverviewPlaying movies={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });


    describe('Movies Popular', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieOverviewPopular movies={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });


    describe('Movies Toprated', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieOverviewToprated movies={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });


    describe('Movies Upcoming', function() {
    	it('should render correctly', function() {
    		const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieOverviewUpcoming movies={fromJS({})}/>
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});

    });

    // TV ----------------------------

    describe('<SearchBarTv />', function() {

    	it('renders correctly', function() {
    		const tree = renderer.create(<SearchBarTv tv={fromJS({})} />).toJSON();
      		expect(tree).toMatchSnapshot();
    	});

    	it('calls onchange event and calls fetchSearchResultsTv', () => {
    		 const props = {
		       fetchSearchResultsTv: (term) => { return term}
		    };

		    spyOn(props, 'fetchSearchResultsTv');
		    props.fetchSearchResultsTv('')

    		const wrapper = shallow(<SearchBarTv {...props}/>); 
    		wrapper.instance().onInputChange('')

    		expect(props.fetchSearchResultsTv).toHaveBeenCalled()
       	});
    });

    describe('<TvDetails />', function() {
    	
    	it('renders correctly', function() {
    		    		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<TvDetails tvDetails={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });
    describe('<TvOverviewPlaying />', function() {
    	
    	it('renders correctly', function() {
    		
    		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<TvOverviewPlaying tv={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });
    describe('<TvOverviewPopular />', function() {
    	
    	it('renders correctly', function() {
    		
    		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<TvOverviewPopular tv={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });
    describe('<TvOverviewToprated />', function() {
    	
    	it('renders correctly', function() {
    		 		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<TvOverviewToprated tv={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });
    describe('<TvOverviewUpcoming />', function() {
    	
    	it('renders correctly', function() {
    		 		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<TvOverviewUpcoming tv={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    });
});

    
