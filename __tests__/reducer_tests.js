import reducer from "../js/reducers/movie_reducer.js";
import * as actions from '../js/actions/index.js';

describe("Movie reducer tests", () => {

  
  it('Should return initial state', () => {
    const initialState = [];
    expect(reducer(initialState, "NOT_AN_VALID_ACTION")).toEqual(initialState)
  })

  it('Should return fetch popular movies', () => {
      const initialState = [];
      
      const fetchPopularMoviesReducer = {
      	payload: {},
      	type: "FETCH_POPULAR_MOVIES"
      }

    expect(reducer(initialState, actions.fetchPopularMovies() )).toBe(results.length != 0)
  })


}) 






