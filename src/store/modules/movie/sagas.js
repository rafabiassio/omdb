import { call, put, takeLatest, all } from 'redux-saga/effects'
import { api } from '../../../config/axios'
import * as constants from './constants'

import {
	getByTitleSuccess,
	getByTitleFailure,
	getPageSuccess,
	getPageFailure,
	getByImdbSuccess,
	getByImdbFailure
} from './actions'

const apiKey = process.env.API_KEY

const MODULE = 'movie'
const ERROR = {
	SEARCH: `Error find ${MODULE}s`,
	GET: `Error get ${MODULE}`,
}

function* getByTitle({ data }) {
	try {
		const { title } = data
		const params = {
			params: {
				s: title,
				apikey: apiKey,
				type: 'movie'
			}
		}
		const { data: response } = yield call(api.get, '', params)
		yield put(getByTitleSuccess(response))
	} catch (error) {
		console.error(ERROR.SEARCH)
		yield put(getByTitleFailure(error))
	}
}

function* getByPage({ data }) {
	try {
		const { title, page } = data
		const params = {
			params: {
				s: title,
				page,
				apikey: apiKey,
				type: 'movie'
			}
		}
		const { data: response } = yield call(api.get, '', params)
		yield put(getPageSuccess(response))
	} catch (error) {
		console.error(ERROR.SEARCH)
		yield put(getPageFailure(error))
	}
}

function* getByImdb({ data }) {
	try {
		const { imdb } = data
		const params = {
			params: {
				i: imdb,
				apikey: apiKey,
				type: 'movie',
				plot: 'full'
			}
		}
		const { data: response } = yield call(api.get, '', params)
		yield put(getByImdbSuccess(response))
	} catch (error) {
		console.error(ERROR.GET)
		yield put(getByImdbFailure(error))
	}
}

export default all([
	takeLatest(constants.GET_BY_TITLE.REQUEST, getByTitle),
	takeLatest(constants.GET_PAGE.REQUEST, getByPage),
	takeLatest(constants.GET_BY_IMDB.REQUEST, getByImdb),
])
