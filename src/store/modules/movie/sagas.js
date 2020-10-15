import { call, put, takeLatest, all } from 'redux-saga/effects'
import { api } from '../../../config/axios'
import * as constants from './constants'

import { getByTitleSuccess, getByTitleFailure } from './actions'

const apiKey = process.env.API_KEY

const MODULE = 'filme'
const ERROR = {
	STORE: `Erro ao salvar ${MODULE}`,
	LIST: `Erro ao carregar ${MODULE}s`,
	SEARCH: `Erro ao buscar ${MODULE}s`,
	GET: `Erro ao encontrar ${MODULE}s`,
	UPDATE: `Error ao atualizar ${MODULE}`,
}

function* getByTitle({ data }) {
	try {
		const { title } = data
		const params = {
			params: {
				s: title,
				apikey: apiKey
			}
		}
		const { data: response } = yield call(api.get, '', params)
		yield put(getByTitleSuccess(response))
	} catch (error) {
		console.error(ERROR.SEARCH)
		yield put(getByTitleFailure(error))
	}
}

export default all([
	takeLatest(constants.GET_BY_TITLE.REQUEST, getByTitle),
])