export default function (state = [], action) {
	switch (action.type) {
	case "FETCH_POPULAR_MOVIES":
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case "FETCH_UPCOMING_MOVIES":
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case "FETCH_PLAYING_MOVIES":
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case "FETCH_TOPRATED_MOVIES":
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case "FETCH_SEARCH_RESULTS":
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	}

		return state;
}