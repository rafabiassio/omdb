import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Button, Text } from 'rebass'

const Pagination = ({ page, totalResults, totalPages, handlePageAction }) => {

	const handlePage = (type = 'next') => {
		let pageValue = type === 'next' ? (page + 1) : (page - 1)

		const requestProps = {
			pageValue,
			pageTo: type
		}
		handlePageAction(requestProps)
	}

	const PaginationInfo = () => (
		<Text p={2} fontWeight='bold'>
			{`${page} - ${totalPages} of ${totalResults} result${totalResults > 1 ? 's' : ''}`}
		</Text>
	)

	return (
		<Flex
			width='100%'
			justifyContent='center'
			py={2}
		>
			<Button
				variant='secondary'
				onClick={() => handlePage('back')}
				disabled={page < 2}
			>
				Previous
			</Button>
			<Flex
				px={3}
				justifyContent='center'
				alignItems='center'
			>
				<PaginationInfo />
			</Flex>
			<Button
				variant='primary'
				onClick={() => handlePage('next')}
				disabled={page === totalPages}
			>
				Next
			</Button>
		</Flex>
	)
}

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	totalResults: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	handlePageAction: PropTypes.func.isRequired
}

export default Pagination
