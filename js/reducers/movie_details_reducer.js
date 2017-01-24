export default function requestMovieDetails(state = [], action) {
	switch (action.type) {
	case "FETCH_MOVIE_DETAILS":
		state.splice(0, state.length)
		return state.concat(action.payload.data);
		break;

		default: {
			return state;
		}
	}
}