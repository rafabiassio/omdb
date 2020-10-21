import React from 'react'
import { Flex, Text } from 'rebass'

import { sizing } from '../../theme'

const Header = () => {
	return (
		<Flex
			px={2}
			color='white'
			bg='purple'
			alignItems='center'
			justifyContent='center'
			height={sizing.headerHeight}
		>
			<Text p={2} fontWeight='bold'>
				OMDB API - ReactJS
				</Text>
		</Flex>
	)
}

export default Header
