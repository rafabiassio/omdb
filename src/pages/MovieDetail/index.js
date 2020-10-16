import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, Box, Card, Image, Text, Heading } from 'rebass'
import { useHistory, useLocation } from 'react-router-dom'

import { getByImdbRequest, clearContent } from '../../store/modules/movie/actions'
import Description from '../../components/Description'

const MovieDetail = () => {
	const history = useHistory()
	const location = useLocation()
	const dispatch = useDispatch()
	const { content } = useSelector((state) => ({
		content: state.movie.content
	}))

	useEffect(() => {
		const { state, pathname } = location
		const imdb = state?.imdb || pathname.split('/').reverse()[0]
		dispatch(getByImdbRequest({ imdb }))

		return () => {
			dispatch(clearContent())
		}
	}, [])

	return (
		<Flex
			sx={{
				justifyContent: 'center',
				ml: 'auto',
				paddingTop: 4,
				paddingBottom: 6
			}}
		>
			<Card width={1 / 3}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<Image src={content?.Poster} />
				<Heading
					fontSize={4}
					color='primary'
					py={2}
				>
					{content?.Title}
				</Heading>

				<Description
					title='Genre'
					contain={content?.Genre}
				/>
				<Description
					title='Runtime'
					contain={content?.Runtime}
				/>
				<Description
					title='Director'
					contain={content?.Director}
				/>
			</Card>
			<Flex width={2 / 3}
				sx={{
					flexDirection: 'column',
					px: 1,
					py: 2,
				}}
			>
				<Description
					title='Plot'
					contain={content?.Plot}
				/>
				<Description
					title='Actors'
					contain={content?.Actors}
				/>
				<Description
					title='Released'
					contain={content?.Released}
				/>
				<Description
					title='Writer (s)'
					contain={content?.Writer}
				/>
				<Description
					title='Production'
					contain={content?.Production}
				/>
				<Description
					title='Awards'
					contain={content?.Awards}
				/>
				<Description
					title='Language'
					contain={content?.Language}
				/>
				<Description
					title='Country'
					contain={content?.Country}
				/>
			</Flex>
		</Flex>
	)
}

MovieDetail.propTypes = {
	imdb: PropTypes.string,
	content: PropTypes.object
}

export default MovieDetail
