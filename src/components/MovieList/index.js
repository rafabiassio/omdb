import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'

import Movie from '../Movie'

const MovieList = ({ movies }) => {
	return (
		<Box
			sx={{
				display: 'grid',
				columnGap: 1,
				rowGap: 2,
				gridTemplateColumns: 'repeat(auto-fit, 250px)',
				width: '100%',
				justifyContent: 'center'
			}}>
			{movies.map((movie, index) => {
				const { Poster, Title, Year } = movie

				return (
					<Movie
						key={index}
						posterImg={Poster}
						title={Title}
						year={Year}
					/>
				)
			})}
		</Box>
	)
}

MovieList.propTypes = {
	movies: PropTypes.array.isRequired
}

export default MovieList