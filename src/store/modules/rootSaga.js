import { all } from 'redux-saga/effects'

import movie from './movie/sagas'

export default function* rootSaga() {
	return yield all([
		movie
	])
}
