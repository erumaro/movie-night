// Reducers
import reducerMovies from "../js/reducers/movie_reducer.js";
import reducerMovieDetails from "../js/reducers/movie_details_reducer.js";
import reducerTv from "../js/reducers/tv_reducer.js";
import reducerTvDetails from "../js/reducers/tv_details_reducer.js";

//Actions
import * as actions from '../js/actions/index.js';

// Mock Axios
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);







// ---------------------------------------------------------------------------------------------------------

describe("Movie reducer tests", () => {

  const initialState = [];

  it('Should return array from reducer when FETCH_POPULAR_MOVIES is called', () => {
    expect(reducerMovies(initialState, actions.fetchPopularMovies )).toEqual([])
  })

  it('Should return array from reducer when FETCH_UPCOMING_MOVIES is called', () => {
    expect(reducerMovies(initialState, actions.fetchUpcomingMovies )).toEqual([])
  })

  it('Should return array from reducer when FETCH_PLAYING_MOVIES is called', () => {
    expect(reducerMovies(initialState, actions.fetchNowPlayingMovies )).toEqual([])
  })

  it('Should return array from reducer when FETCH_TOPRATED_MOVIES is called', () => {
    expect(reducerMovies(initialState, actions.fetchTopRatedMovies )).toEqual([])
  })

  it('Should return array from reducer when FETCH_SEARCH_RESULTS is called', () => {
    expect(reducerMovies(initialState, actions.fetchSearchResults )).toEqual([])
  })

  it('Should return array from reducer when FETCH_MOVIE_DETAILS is called', () => {
    expect(reducerMovieDetails(initialState, actions.fetchMovieDetails )).toEqual([])
  })


})

describe("Tv reducer tests", () => {

  const initialState = [];

  it('Should return array from reducer when FETCH_POPULAR_TV is called', () => {
    expect(reducerTv(initialState, actions.fetchPopularTV )).toEqual([])
  })

  it('Should return array from reducer when FETCH_UPCOMING_TV is called', () => {
    expect(reducerTv(initialState, actions.fetchUpcomingTV )).toEqual([])
  })

  it('Should return array from reducer when FETCH_PLAYING_TV is called', () => {
    expect(reducerTv(initialState, actions.fetchPlayingTV )).toEqual([])
  })

  it('Should return array from reducer when FETCH_TOPRATED_TV is called', () => {
    expect(reducerTv(initialState, actions.fetchTopRatedTV )).toEqual([])
  })

  it('Should return array from reducer when FETCH_SEARCH_RESULTS_TV is called', () => {
    expect(reducerTv(initialState, actions.fetchSearchResultsTv )).toEqual([])
  })

  it('Should return array from reducer when FETCH_TV_DETAILS is called', () => {
    expect(reducerTvDetails(initialState, actions.fetchTvDetails )).toEqual([])
  })


})

describe("Mock Test", () => {

  let state = [];
  
  mock.onGet('/movie/popular').reply({
    movies: [
      { id: 42 }
    ]
  });
  
  axios.get('/movie/popular')
    .then(function(response) {
      state.splice(0, state.length)
      state.concat(response.data)
    });

  it('Testing Mocks', () => {
    expect(reducerMovies(state)).toEqual(state)
  })


})