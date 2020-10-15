import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const CustomRoute = ({ component, parent, ...restProps }) => {
	const Component = component

	if (parent) {
		const Parent = parent

		return (
			<Parent>
				<Route
					{...restProps}
					render={(props) => {
						return <Component {...props} />
					}}
				/>
			</Parent>
		)
	}
	return <Route {...restProps} render={(props) => <Component {...props} />} />
}

export default CustomRoute

CustomRoute.propTypes = {
	path: PropTypes.string.isRequired,
	exact: PropTypes.bool,
	parent: PropTypes.func,
	component: PropTypes.func.isRequired,
}
