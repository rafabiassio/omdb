import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Flex, Text, Link } from 'rebass'
import { useHistory } from 'react-router-dom'

import Pagination from '../Pagination'
import { MOVIE_DETAIL } from '../../routes/paths'

const Footer = () => {
	const history = useHistory()
	const [isHome, setHome] = useState(true)
	const { totalResults } = useSelector((state) => ({
		totalResults: state.movie.totalResults
	}))

	useEffect(() => {
		if (history.location.pathname.includes(MOVIE_DETAIL.url)) {
			setHome(false)
		}
	}, [history.location.pathname])

	const Signature = () => {
		return (
			<Flex px={2} color='white' bg='purple' alignItems='center' justifyContent='center'>
				<Text>@ Designed by Rafael Biassio</Text>
			</Flex>
		)
	}

	const NavLink = () => {
		if (isHome) {
			return null
		}

		return (
			<Link
				variant='nav'
				sx={{
					position: 'absolute',
					left: '40px',
					display: 'inline-block',
					fontWeight: 'bold',
					px: 2,
					py: 1,
					color: 'inherit',
					'&:hover': {
						color: 'primary'
					}
				}}
				onClick={() => {
					history.goBack()
				}}
			>
				Back to home
			</Link >
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
			<NavLink />

			{(isHome && totalResults > 0)
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
