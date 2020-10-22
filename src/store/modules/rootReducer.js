import { combineReducers } from 'redux'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'

import movie from './movie/reducer'

export default combineReducers({
	movie,
	loadingBar
})
