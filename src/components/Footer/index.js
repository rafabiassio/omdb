import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Flex, Text } from 'rebass'
import { useLocation } from 'react-router-dom'

import Pagination from '../Pagination'
import paginationList from '../Pagination/pagination'

const Footer = () => {
	const location = useLocation()
	const [isPagination, setPagination] = useState(false)
	const { totalResults } = useSelector((state) => ({
		totalResults: state.movie.totalResults
	}))

	useEffect(() => {
		const withPagination = paginationList
			.some(path => (
				path === location.pathname
			))
		setPagination(withPagination)
	}, [location.pathname])

	const Signature = () => {
		return (
			<Flex px={2} color='white' bg='purple' alignItems='center' justifyContent='center'>
				<Text>@ Designed by Rafael Biassio</Text>
			</Flex>
		)
	}

	return (
		<Flex
			sx={{
				position: 'fixed',
				bottom: '0',
				width: '100%',
				height: '52px',
				justifyContent: 'center',
				alignItems: 'center',
				bg: 'purple',
				color: 'white'
			}}
		>
			{(isPagination && totalResults > 0)
				? <Pagination />
				: <Signature />
			}
		</Flex>
	)
}

Footer.propTypes = {
	totalResults: PropTypes.number
}

export default Footer
