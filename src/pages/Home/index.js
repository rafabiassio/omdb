import React, { useEffect, useState } from 'react'
import Search from '../../components/Search'
import MovieList from '../../components/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import Pagination from '../../components/Pagination'
import { HOME } from '../../routes/paths'
import { getPageRequest } from '../../store/modules/movie/actions'

const Home = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()
	const [allowPagination, setAllowPagination] = useState(false)
	const {
		movies = [],
		valueSearched,
		page,
		totalResults
	} = useSelector((state) => ({
		movies: state.movie.movies,
		valueSearched: state.movie.valueSearched,
		page: state.movie.page,
		totalResults: state.movie.totalResults
	}))

	useEffect(() => {
		const { state, pathname } = location
		const pageValue = state?.page || pathname.split('/').reverse()[0]

		if (pageValue) {
			handleByPage({ pageValue })
		}
	}, [location])

	useEffect(() => {
		if (totalResults > 0) {
			setAllowPagination(true)
		}
	}, [totalResults])

	const handleByPage = ({ pageValue, pageTo }) => {
		let requestProps = {
			title: valueSearched,
			page: pageValue
		}

		if (pageTo) {
			Object.assign(requestProps, pageTo)
		}

		dispatch(getPageRequest(requestProps))
	}

	const handlePageAction = ({ pageValue }) => {
		handleByPage({ pageValue })
		history.push({
			pathname: `${HOME.url}${pageValue}`,
			state: { page: pageValue }
		})
	}

	return (
		<>
			<Search />
			<MovieList />
			{allowPagination &&
				<Pagination
					page={page}
					totalPages={parseInt(totalResults / 10)}
					totalResults={totalResults}
					handlePageAction={handlePageAction}
				/>
			}
		</>
	)
}

export default Home
