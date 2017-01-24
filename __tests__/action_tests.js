import * as actions from '../js/actions/index.js';

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