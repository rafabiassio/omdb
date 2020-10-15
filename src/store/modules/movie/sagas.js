import { call, put, takeLatest, all } from 'redux-saga/effects'
import * as constants from './constants'

import { getSuccess, getFailure } from './actions'

const ROUTE = '/movies'
const MODULE = 'filme'
const ERROR = {
	STORE: `Erro ao salvar ${MODULE}`,
	LIST: `Erro ao carregar ${MODULE}s`,
	SEARCH: `Erro ao buscar ${MODULE}s`,
	GET: `Erro ao encontrar ${MODULE}s`,
	UPDATE: `Error ao atualizar ${MODULE}`,
}


export default all([])
