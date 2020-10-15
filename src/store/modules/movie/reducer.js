import * as actions from './constants'

const initialState = {
	loading: false,
	content: null,
	movies: [],
	totalResults: 0,
	error: {},
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_BY_TITLE.REQUEST:
			return { ...state, loading: true }
		case actions.GET_BY_TITLE.SUCCESS:
			const { Search: movies = [], totalResults = 0 } = action.data

			return {
				...state,
				loading: false,
				content: null,
				movies,
				totalResults
			}
		case actions.GET_BY_TITLE.FAILURE:
			return {
				...state,
				loading: false,
				error: {
					type: actions.GET_BY_TITLE.FAILURE,
					error: action.data,
				},
			}
		default:
			return state
	}
}
