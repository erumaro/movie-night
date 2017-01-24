import * as actions from '../js/actions/index.js';

describe('Movie action tests', () => {
  it('should call popular movie action', () => {
    
    const expectedAction = {
      type: 'FETCH_POPULAR_MOVIES',
      payload: {},
    }
    expect(actions.fetchPopularMovies('FETCH_POPULAR_MOVIES')).toEqual(expectedAction)
  })

    it('should call upcoming movie action', () => {
    
    const expectedAction = {
      type: 'FETCH_UPCOMING_MOVIES',
      payload: {},
    }
    expect(actions.fetchUpcomingMovies('FETCH_UPCOMING_MOVIES')).toEqual(expectedAction)
  })

  it('should call playing movie action', () => {
    
    const expectedAction = {
      type: 'FETCH_PLAYING_MOVIES',
      payload: {},
    }
    expect(actions.fetchNowPlayingMovies('FETCH_PLAYING_MOVIES')).toEqual(expectedAction)
  })
  
    it('should call top rated movie action', () => {
    
    const expectedAction = {
      type: 'FETCH_TOPRATED_MOVIES',
      payload: {},
    }
    expect(actions.fetchTopRatedMovies('FETCH_TOPRATED_MOVIES')).toEqual(expectedAction)
  })

  it('should call movie details action', () => {
    
    const expectedAction = {
      type: 'FETCH_MOVIE_DETAILS',
      payload: {},
    }
    expect(actions.fetchMovieDetails('FETCH_MOVIE_DETAILS')).toEqual(expectedAction)
  })
  
    it('should call search movie action', () => {
    
    const expectedAction = {
      type: 'FETCH_SEARCH_RESULTS',
      payload: {},
    }
    expect(actions.fetchSearchResults('FETCH_SEARCH_RESULTS')).toEqual(expectedAction)
  })
})



describe('TV series action tests', () => {
  it('should call popular tv action', () => {
    const popularTvAction = {
      type: "FETCH_POPULAR_TV",
      payload: {},
    }
    expect(actions.fetchPopularTV()).toEqual(popularTvAction)
  })

    it('should call upcoming tv action', () => {
    const upcomingTvAction = {
      type: "FETCH_UPCOMING_TV",
      payload: {},
    }
    expect(actions.fetchUpcomingTV()).toEqual(upcomingTvAction)
  })

  	it('should call playing tv action', () => {
    const playingTvAction = {
      type: "FETCH_PLAYING_TV",
      payload: {},
    }
    expect(actions.fetchPlayingTV()).toEqual(playingTvAction)
  })

    it('should call top rated tv action', () => {
    const topRatedTvAction = {
      type: "FETCH_TOPRATED_TV",
      payload: {},
    }
    expect(actions.fetchTopRatedTV()).toEqual(topRatedTvAction)
  })

    it('should call tv details action', () => {
    const tvDetailsTvAction = {
      type: "FETCH_TV_DETAILS",
      payload: {},
    }
    expect(actions.fetchTvDetails()).toEqual(tvDetailsTvAction)
  })

    it('should call search tv action', () => {
    const searchTvAction = {
      type: "FETCH_SEARCH_RESULTS_TV",
      payload: {},
    }
    expect(actions.fetchSearchResultsTv()).toEqual(searchTvAction)
  })

})