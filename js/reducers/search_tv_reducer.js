export default function (state = [], action) {
	switch (action.type) {
	
	case "FETCH_SEARCH_RESULTS_TV":
		state.splice(0, state.length)
		return state.concat(action.payload.data.results);
	}

		return state;
}