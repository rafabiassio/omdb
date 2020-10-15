import React from 'react'
import { Switch } from 'react-router-dom'

import pageRoutes from './routes'
import CustomRoute from './customRoute'
import Layout from '../components/Layout'


const Routes = () => {
	return (
		<Switch>
			{pageRoutes.map(route => (
				<CustomRoute
					key={route.path}
					exact
					path={route.path}
					parent={Layout}
					component={route.component}
				/>
			))}
		</Switch>
	)
}

export default Routes
