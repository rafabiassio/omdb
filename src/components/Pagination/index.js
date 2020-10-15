import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, Button, Text } from 'rebass'

import { getPageRequest } from '../../store/modules/movie/actions'

const Pagination = () => {
	const dispatch = useDispatch()
	const {
		page,
		totalResults,
		valueSearched
	} = useSelector((state) => ({
		page: state.movie.page,
		totalResults: state.movie.totalResults,
		valueSearched: state.movie.valueSearched
	}))

	const handlePage = (type = 'next') => {
		let pageValue = type === 'next' ? (page + 1) : (page - 1)

		dispatch(getPageRequest({
			title: valueSearched,
			page: pageValue,
			pageTo: type
		}))
	}

	const PaginationInfo = () => {
		if (!totalResults) {
			return null
		}
		const pages = parseInt(totalResults / 10)

		return (
			<Text p={2} fontWeight='bold'>
				{`${page} - ${pages} of ${totalResults} result${totalResults > 1 ? 's' : ''}`}
			</Text>
		)
	}

	return (
		<Flex>
			<Button
				variant='secondary'
				disabled={page < 2}
				onClick={() => handlePage(true)}
			>
				Back
			</Button>
			<Flex width='50vw' justifyContent='center' alignItems='center'>
				<PaginationInfo />
			</Flex>
			<Button
				variant='primary'
				onClick={() => handlePage()}
			>
				Next
			</Button>
		</Flex>
	)

}

Pagination.propTypes = {
	page: PropTypes.number,
	totalResults: PropTypes.number,
	valueSearched: PropTypes.string
}

export default Pagination
