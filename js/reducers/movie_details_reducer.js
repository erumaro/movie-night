export default function (state = [], action) {
	switch (action.type) {
	case "FETCH_MOVIE_DETAILS":
		state.splice(0, state.length)
		return state.concat(action.payload.data);
	}
		return state;
}