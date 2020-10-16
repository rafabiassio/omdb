import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Card, Image, Text, Box } from 'rebass'
import { useHistory } from 'react-router-dom'

import { MOVIE_DETAIL } from '../../routes/paths'

const Movie = ({ posterImg, title, year, imdb }) => {
	const history = useHistory()

	const toMovieDetail = () => {
		const pathname = `${MOVIE_DETAIL.url}/${imdb}`
		history.push({
			pathname,
			state: { imdb }
		})
	}

	return (
		<Flex
			onClick={toMovieDetail}
		>
			<Card
				sx={{
					width: 240,
					height: 408,
					mx: 'auto',
					boxShadow: '0 4px 8px 0 rgba(103, 58, 183,0.2)',
					transition: '0.5s',
					'&:hover': {
						boxShadow: '0 8px 16px 0 rgba(103, 58, 183,0.4)',
					}
				}}
			>
				<Image
					src={posterImg}
					sx={{
						height: 350,
						minWidth: '100%',
						borderRadius: 5,
					}}
				/>
				<Flex justifyContent='space-between' px='1' py='1'>
					<Text width={240} height={56}>
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
	imdb: PropTypes.string.isRequired,
}

export default Movie
