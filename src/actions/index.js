export const FETCH_PRODUCT_BEGIN = "FETCH_PRODUCT_BEGIN";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";
export const GROUP_BY_SUCCESS = "GROUP_BY_SUCCESS";

export function fetchProduct() {
	return dispatch => {
		dispatch(fetchProductBegin());
		return fetch("../product.json")
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				// dispatch(groupByMonths(json[0], "retailSales"));
				dispatch(fakeGroupByMonths());
				dispatch(fetchProductSuccess(json));
				return json;
			})
			.catch(error => dispatch(fetchProductFailure(error)));
	};
}

//Method to group sale data by given column name for visualization
export function groupByMonths(data, groupBy) {
	var response = Array(12).fill(0);
	return dispatch => {
		response = data.sales.reduce((arr, item) => {
			var month = new Date(item.weekEnding).getMonth();

			arr[month] += item[groupBy];

			return arr;
		}, response);
		dispatch(groupBySuccess(response));
	};
}
export function fakeGroupByMonths() {
	var valuesFirst = Array.from({ length: 12 }, () =>
		Math.floor(Math.random() * 345253)
	);
	var valuesSecond = Array.from({ length: 12 }, () =>
		Math.floor(Math.random() * 345253)
	);
	var months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	var response = months.reduce((arr, month, i) => {
		console.log(i);
		arr.push({
			name: month,
			valueFirst: valuesFirst[i],
			valueSecond: valuesSecond[i]
		});
		return arr;
	}, []);
	return dispatch => {
		dispatch(groupBySuccess(response));
	};
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

export const fetchProductBegin = () => ({
	type: FETCH_PRODUCT_BEGIN
});

export const fetchProductSuccess = product => ({
	type: FETCH_PRODUCT_SUCCESS,
	payload: product[0]
});

export const fetchProductFailure = error => ({
	type: FETCH_PRODUCT_FAILURE,
	payload: { error }
});

export const groupBySuccess = sales => ({
	type: GROUP_BY_SUCCESS,
	payload: sales
});
