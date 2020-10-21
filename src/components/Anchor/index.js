import React from 'react'
import PropTypes from 'prop-types'
import { Text, Link } from 'rebass'

const Anchor = ({ text, icon, href, handleClick, target, ...restProps }) => {
	return (
		<Link
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: 1,
				fontWeight: 'bold',
				paddingLeft: 2,
				py: 1,
				color: 'inherit',
				'&:hover': {
					color: 'primary'
				}
			}}
			href={href}
			onClick={handleClick}
			target={target}
			{...restProps}
		>
			{icon}
			<Text>{text}</Text>
		</Link>
	)
}

Anchor.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.any,
	href: PropTypes.string,
	handleClick: PropTypes.func,
	target: PropTypes.string
}

export default Anchor
