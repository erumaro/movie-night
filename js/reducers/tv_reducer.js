export default function (state = [], action) {
	switch (action.type) {
	case "FETCH_POPULAR_TV":
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case "FETCH_UPCOMING_TV":
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case "FETCH_PLAYING_TV":
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	case "FETCH_TOPRATED_TV":
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	}
		return state;
}