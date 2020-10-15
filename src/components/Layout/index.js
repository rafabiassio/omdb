import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text, Box } from 'rebass'

const Layout = ({ children }) => {
	return (
		<>
			<Flex px={2} color="white" bg="#4527a0" alignItems="center">
				<Text p={2} fontWeight="bold">
					OMDB
				</Text>
				<Box mx="auto" />
			</Flex>
			<main>{children}</main>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.func.isRequired
}

export default Layout
