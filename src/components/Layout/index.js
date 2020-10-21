import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'

import { sizing } from '../../theme'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
	return (
		<Box
			height={`calc(100% - ${sizing.headerHeight} - ${sizing.footerHeight})`}
		>
			<Header />
			<main>{children}</main>
			<Footer />
		</Box>
	)
}

Layout.propTypes = {
	children: PropTypes.any.isRequired
}

export default Layout
