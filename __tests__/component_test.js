import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';
import { shallow, render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MovieOverviewPlaying } from '../js/containers/movie_overview_playing';
import { SearchBar } from '../js/containers/search_bar';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import * as types from "../js/constants/ActionTypes.js";
import ReactTestUtils from 'react-addons-test-utils';
import {createStore} from 'redux' 
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
    	it('calls onchange event', () => {
    		 const props = {
		       onInputChange: sinon.spy(),
		       term: 'fartface',
		       fetchSearchResults: (term) => { return term}

		    };
    		const wrapper = shallow(<SearchBar {...props} />); 
    		wrapper.instance().onInputChange('')
    	});

    });
    describe('<MovieOverviewPlaying />', function() {

    	const store = createStore(reducers) // can also be a mock

		ReactTestUtils.renderIntoDocument(
		  <Provider store={store}>
		    <MovieOverviewPlaying/>
		  </Provider>
		) 

    	it('renders correctly', function() {
    		const props = {
		       movies : [{release_date: '2011-10-10'}]
		    };
    		const tree = renderer.create(<MovieOverviewPlaying {...props} />).toJSON();
      		expect(tree).toMatchSnapshot();
    	});
    	it('calls renderMovies', () => {
    		 const props = {
		       movies : [{release_date: '2011-10-10'}]

    		const wrapper = shallow(<MovieOverviewPlaying {...props}/>); 
    		
    	});

    });
>>>>>>> 1db3fc9924e8be9aece340539fa78737086f2bb5
});

    
