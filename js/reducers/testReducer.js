export default function (state = [], action) {
	switch (action.type) {
	case "TEST":
		state.splice(0, state.length)
		return state.concat(action.payload.data);
	}
		return state;
}