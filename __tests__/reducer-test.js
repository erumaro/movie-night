import * as actions from '../js/actions/index'


describe('actions', () => {
  it('should create an action to return popular movies', () => {
    
    const expectedAction = {
      type: 'FETCH_POPULAR_MOVIES',
      payload: {},
    }
    expect(actions.fetchPopularMovies('FETCH_POPULAR_MOVIES')).toEqual(expectedAction)
  })

    it('should create an action to return upcoming movies', () => {
    
    const expectedAction = {
      type: 'FETCH_UPCOMING_MOVIES',
      payload: {},
    }
    expect(actions.fetchUpcomingMovies('FETCH_UPCOMING_MOVIES')).toEqual(expectedAction)
  })

  it('should create an action to return now playing movies', () => {
    
    const expectedAction = {
      type: 'FETCH_PLAYING_MOVIES',
      payload: {},
    }
    expect(actions.fetchNowPlayingMovies('FETCH_PLAYING_MOVIES')).toEqual(expectedAction)
  })
  
    it('should create an action to return top rated movies', () => {
    
    const expectedAction = {
      type: 'FETCH_TOPRATED_MOVIES',
      payload: {},
    }
    expect(actions.fetchTopRatedMovies('FETCH_TOPRATED_MOVIES')).toEqual(expectedAction)
  })

  it('should create an action to return movie details', () => {
    
    const expectedAction = {
      type: 'FETCH_MOVIE_DETAILS',
      payload: {},
    }
    expect(actions.fetchMovieDetails('FETCH_MOVIE_DETAILS')).toEqual(expectedAction)
  })
  
    it('should create an action to return search results', () => {
    
    const expectedAction = {
      type: 'FETCH_SEARCH_RESULTS',
      payload: {},
    }
    expect(actions.fetchSearchResults('FETCH_SEARCH_RESULTS')).toEqual(expectedAction)
  })
})



