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

    describe('Movie Details', function() {
    	it('should render correctly', function() {
    	const tree = renderer.create(
          <Provider store={createStore(reducers)}>
    			 <MovieDetails movieDetails={fromJS({})} />
    			</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderMovieDetails has been called', () => {
		    spyOn(MovieDetails.prototype, 'renderMovieDetails');

		    const wrapper = mount(<MovieDetails movieDetails={fromJS({})} />);

		    expect(wrapper).toBeDefined();
		    expect(MovieDetails.prototype.renderMovieDetails).toHaveBeenCalledTimes(1);
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
      	it('checks if renderMovies has been called', () => {
		    spyOn(MovieOverviewPlaying.prototype, 'renderMovies');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<MovieOverviewPlaying movies={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(MovieOverviewPlaying.prototype.renderMovies).toHaveBeenCalled;
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
    	it('checks if renderMovies has been called', () => {
		    spyOn(MovieOverviewPopular.prototype, 'renderMovies');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<MovieOverviewPopular movies={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(MovieOverviewPopular.prototype.renderMovies).toHaveBeenCalled;
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
    	it('checks if renderMovies has been called', () => {
		    spyOn(MovieOverviewToprated.prototype, 'renderMovies');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<MovieOverviewToprated movies={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(MovieOverviewToprated.prototype.renderMovies).toHaveBeenCalled;
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
    	it('checks if renderMovies has been called', () => {
		    spyOn(MovieOverviewUpcoming.prototype, 'renderMovies');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<MovieOverviewUpcoming movies={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(MovieOverviewUpcoming.prototype.renderMovies).toHaveBeenCalled;
		});

    });


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
    	it('checks if renderTvDetails has been called', () => {
		    spyOn(TvDetails.prototype, 'renderTvDetails');

		    const wrapper = mount(<TvDetails tvDetails={fromJS({})} />);

		    expect(wrapper).toBeDefined();
		    expect(TvDetails.prototype.renderTvDetails).toHaveBeenCalledTimes(1);
		});
    	
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
    	it('checks if renderTv has been called', () => {
		    spyOn(TvOverviewPlaying.prototype, 'renderTv');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<TvOverviewPlaying tv={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(TvOverviewPlaying.prototype.renderTv).toHaveBeenCalled;
		});
    });
    describe('<TvOverviewPopular />', function() {
    	
    	it('renders correctly', function() {
    		
    		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<TvOverviewPopular tv={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderTv has been called', () => {
		    spyOn(TvOverviewPopular.prototype, 'renderTv');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<TvOverviewPopular tv={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(TvOverviewPopular.prototype.renderTv).toHaveBeenCalled;
		});
    });
    describe('<TvOverviewToprated />', function() {
    	
    	it('renders correctly', function() {
    		 		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<TvOverviewToprated tv={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderTv has been called', () => {
		    spyOn(TvOverviewToprated.prototype, 'renderTv');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<TvOverviewToprated tv={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(TvOverviewToprated.prototype.renderTv).toHaveBeenCalled;
		});
    });
    describe('<TvOverviewUpcoming />', function() {
    	
    	it('renders correctly', function() {
    		 		
    		const tree = renderer.create(<Provider store={createStore(reducers)}>
    										<TvOverviewUpcoming tv={fromJS({})}/>
    									</Provider>).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('checks if renderTv has been called', () => {
		    spyOn(TvOverviewUpcoming.prototype, 'renderTv');

		    const wrapper = mount(
		    			<Provider store={createStore(reducers)}>
		    			<TvOverviewUpcoming tv={fromJS({})} />
		    			</Provider>);

		    expect(wrapper).toBeDefined();
		    expect(TvOverviewUpcoming.prototype.renderTv).toHaveBeenCalled;
		});
    });
});

    
