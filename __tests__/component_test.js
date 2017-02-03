import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MovieDetails } from '../js/containers/movie_details';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import * as types from "../js/constants/ActionTypes.js";
const middlewares = [axios] 


describe('components', function() {
  describe('<MovieDetails />', function() {
  	function success() {
	  return {
	    type: 'FETCH_MOVIE_DETAILS'
	  }
	}

	function fetchData () {
	  return dispatch => {
	    return fetch('../test_mocks/fetch_movie_details.json') // Some async action with promise
	      .then(() => dispatch(success()))
	  };
	}
   	it('should execute fetch data', () => {
  		const store = mockStore({})

  		// Return the promise
 		 return store.dispatch(fetchData())
    	.then(() => {
	      const actions = store.getActions()
	      expect(actions[0]).toEqual(success())
      })
	})
  });
});

