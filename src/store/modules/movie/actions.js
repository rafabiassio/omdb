import * as constants from './constants'

export const getByTitleRequest = (data) => ({ type: constants.GET_BY_TITLE.REQUEST, data })
export const getByTitleSuccess = (data) => ({ type: constants.GET_BY_TITLE.SUCCESS, data })
export const getByTitleFailure = (data) => ({ type: constants.GET_BY_TITLE.FAILURE, data })
