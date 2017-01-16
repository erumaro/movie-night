import { combineReducers } from 'redux';
import movieReducer from './movie_reducer'
import tvReducer from './tv_reducer'

const rootReducer = combineReducers({
  movies: movieReducer,
  tv: tvReducer
});

export default rootReducer;