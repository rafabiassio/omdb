import pages from '../pages/pages'
import { HOME, MOVIE_DETAIL } from './paths'

const Home = {
	path: HOME.url,
	component: pages.Home,
	exact: true
}

const MovieDetail = {
	path: `${MOVIE_DETAIL.url}:imdb`,
	component: pages.MovieDetail,
	exact: true
}

const PageNotFound = {
	path: '*',
	component: pages.Home,
	exact: false
}

export default [
	Home,
	MovieDetail,
	PageNotFound
]
