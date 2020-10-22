import * as actions from './constants'

const initialState = {
	loading: false,
	content: null,
	movies: [],
	valueSearched: '',
	totalResults: 0,
	pageTo: '',
	page: 0,
	error: {},
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.CLEAR_CONTENT:
			return {
				...state,
				content: null
			}
		case actions.CLEAR_ALL:
			return { ...initialState }
		case actions.GET_BY_TITLE.REQUEST:
			return {
				...state,
				loading: true,
				valueSearched: action.data?.title || ''
			}
		case actions.GET_BY_TITLE.SUCCESS:
			return {
				...state,
				loading: false,
				content: null,
				movies: action.data?.Search || [],
				totalResults: +action.data?.totalResults || 0,
				page: 1
			}
		case actions.GET_BY_TITLE.FAILURE:
			return {
				...state,
				loading: false,
				valueSearched: '',
				error: {
					type: actions.GET_BY_TITLE.FAILURE,
					error: action.data,
				},
			}

		case actions.GET_PAGE.REQUEST:
			return {
				...state,
				loading: true,
				page: +action.data?.page || state.page,
				pageTo: action.data?.pageTo || state.pageTo,
				valueSearched: action.data?.title || ''
			}
		case actions.GET_PAGE.SUCCESS:
			return {
				...state,
				loading: false,
				content: null,
				movies: action.data?.Search || [],
				totalResults: +action.data?.totalResults || state.totalResults,
			}
		case actions.GET_PAGE.FAILURE:
			const pageValue = state.pageTo === 'next' ? 1 : -1
			return {
				...state,
				loading: false,
				page: state.page + pageValue,
				pageTo: '',
				error: {
					type: actions.GET_PAGE.FAILURE,
					error: action.data,
				},
			}

		case actions.GET_BY_IMDB.REQUEST:
			return {
				...state,
				loading: true
			}
		case actions.GET_BY_IMDB.SUCCESS:
			return {
				...state,
				loading: false,
				content: action.data,
			}
		case actions.GET_BY_IMDB.FAILURE:
			return {
				...state,
				loading: false,
				error: {
					type: actions.GET_BY_IMDB.FAILURE,
					error: action.data,
				},
			}

		default:
			return state
	}
}
