import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

const Description = ({ title, contain }) => {

	const Divider = () => {
		return (
			<Box
				sx={{
					position: 'relative',
					height: '2px',
					my: 1
				}}
			>
				<Box
					sx={{
						content: '""',
						position: 'absolute',
						top: '0',
						left: '5%',
						right: '5%',
						width: '90%',
						height: '1px',
						backgroundImage: 'linear-gradient(to right, transparent, rgb(103,58,183), transparent)',
					}}
				/>
			</Box>
		)
	}

	if (!title || !contain) {
		return null
	}

	return (
		<Flex
			sx={{
				flexDirection: 'column',
				px: 1,
				py: 2,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					fontSize: 2
				}}
			>
				{title}
			</Box>
			<Divider />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					color: 'white',
					px: 2,
					height: '100%'
				}}
			>
				{contain}
			</Box>
		</Flex>
	)
}

Description.propTypes = {
	title: PropTypes.string.isRequired,
	contain: PropTypes.string.isRequired
}

export default Description
