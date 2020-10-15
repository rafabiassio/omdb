import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Card, Image, Text, Box } from 'rebass'

const Movie = ({ posterImg, title, year }) => {
	return (
		<Flex>
			<Card width={240} height={400} mx='auto'>
				<Image
					src={posterImg}
					sx={{
						height: 350,
						minWidth: '100%',
						borderRadius: 5,
					}}
				/>
				<Flex justifyContent='space-between'>
					<Text width={240} height={50}>
						{title}
					</Text>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							height: 25,
							color: 'white',
							bg: 'muted',
							px: 2,
							borderRadius: 5,
						}}
					>
						{year}
					</Box>
				</Flex>
			</Card>
		</Flex>

	)
}

Movie.propTypes = {
	posterImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
}

export default Movie
