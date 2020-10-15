import * as constants from './constants'

export const getByTitleRequest = (data) => ({ type: constants.GET_BY_TITLE.REQUEST, data })
export const getByTitleSuccess = (data) => ({ type: constants.GET_BY_TITLE.SUCCESS, data })
export const getByTitleFailure = (data) => ({ type: constants.GET_BY_TITLE.FAILURE, data })

export const getPageRequest = (data) => ({ type: constants.GET_PAGE.REQUEST, data })
export const getPageSuccess = (data) => ({ type: constants.GET_PAGE.SUCCESS, data })
export const getPageFailure = (data) => ({ type: constants.GET_PAGE.FAILURE, data })
