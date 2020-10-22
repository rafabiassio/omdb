import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import LoadingBar from 'react-redux-loading-bar'

import { sizing, colors } from '../../theme'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
	return (
		<Box
			height={`calc(100% - ${sizing.headerHeight} - ${sizing.footerHeight})`}
		>
			<Header />
			<LoadingBar
				updateTime={50}
				style={{
					backgroundColor: `${colors.primary}`,
					height: '8px'
				}}
			/>
			<main>{children}</main>
			<Footer />
		</Box>
	)
}

Layout.propTypes = {
	children: PropTypes.any.isRequired
}

export default Layout
