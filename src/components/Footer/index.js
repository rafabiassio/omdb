import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'

import Pagination from '../Pagination'

const Footer = () => {
	return (
		<Flex
			sx={{
				position: 'fixed',
				bottom: '0',
				width: '100%',
				height: '5vh',
				justifyContent: 'center',
				alignItems: 'center',
				bg: 'purple',
				color: 'white'
			}}
		>
			<Pagination />
		</Flex>
	)
}

export default Footer
