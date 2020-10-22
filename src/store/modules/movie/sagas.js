import { call, put, takeLatest, all } from 'redux-saga/effects'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
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
		yield put(showLoading())
		const { data: response } = yield call(api.get, '', params)
		yield put(getByTitleSuccess(response))
	} catch (error) {
		console.error(ERROR.SEARCH)
		yield put(getByTitleFailure(error))
	} finally {
		yield put(hideLoading())
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
		yield put(showLoading())
		const { data: response } = yield call(api.get, '', params)
		yield put(getPageSuccess(response))
	} catch (error) {
		console.error(ERROR.SEARCH)
		yield put(getPageFailure(error))
	} finally {
		yield put(hideLoading())
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
		yield put(showLoading())
		const { data: response } = yield call(api.get, '', params)
		yield put(getByImdbSuccess(response))
	} catch (error) {
		console.error(ERROR.GET)
		yield put(getByImdbFailure(error))
	} finally {
		yield put(hideLoading())
	}
}

export default all([
	takeLatest(constants.GET_BY_TITLE.REQUEST, getByTitle),
	takeLatest(constants.GET_PAGE.REQUEST, getByPage),
	takeLatest(constants.GET_BY_IMDB.REQUEST, getByImdb),
])
