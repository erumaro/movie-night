import requestMovieDetails from '../js/reducers/movie_details_reducer';

describe('movie details reducer', () => {
	it('Has default state', () => {
		expect(requestMovieDetails('THE_WRONG_TYPE')).toEqual({
			state:[]
		});
	});
});