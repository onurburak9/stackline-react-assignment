import {
	FETCH_PRODUCT_BEGIN,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE,
	GROUP_BY_SUCCESS
} from "../actions/index";

const initialState = {
	item: [],
	loading: true,
	error: null,
	groupedBySales: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_PRODUCT_BEGIN:
			// Mark the state as "loading" so we can show a spinner or something
			// Also, reset any errors. We're starting fresh.
			return {
				...state,
				loading: true,
				error: null
			};

		case FETCH_PRODUCT_SUCCESS:
			// All done: set loading "false".
			// Also, replace the items with the ones from the server
			return {
				...state,
				loading: false,
				item: action.payload
			};

		case FETCH_PRODUCT_FAILURE:
			// The request failed, but it did stop, so set loading to "false".
			// Save the error, and we can display it somewhere
			// Since it failed, we don't have items to display anymore, so set it empty.
			// This is up to you and your app though: maybe you want to keep the items
			// around! Do whatever seems right.
			return {
				...state,
				loading: false,
				error: action.payload.error,
				item: []
			};

		case GROUP_BY_SUCCESS:
			console.log("Onur", action.payload);
			return {
				...state,
				groupedBySales: action.payload
			};

		default:
			// ALWAYS have a default case in a reducer
			return state;
	}
}
