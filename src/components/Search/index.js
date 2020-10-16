import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Flex, Button } from 'rebass'
import { Input } from '@rebass/forms'
import { useForm } from 'react-hook-form'

import { getByTitleRequest } from '../../store/modules/movie/actions'

const Search = () => {
	const dispatch = useDispatch()
	const { valueSearched: lastValueSearched } = useSelector((state) => ({
		valueSearched: state.movie.valueSearched
	}))
	const { register, formState, setValue, handleSubmit } = useForm()
	const { isValid } = formState

	const onSubmit = (data, event) => {
		const { searchInput } = data
		const query = searchInput.trim().toLowerCase()
		event.preventDefault()

		if (isValid && query !== lastValueSearched) {
			dispatch(getByTitleRequest({
				title: query
			}))
		}
	}

	return (
		<Box
			as='form'
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				py: 3
			}}
			autoComplete="off"
		>
			<Flex
				sx={{
					width: '60vw',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<Input
					id='searchInput'
					name='searchInput'
					placeholder='Enter movie title for search!'
					sx={{
						textAlign: 'center',
						px: 2
					}}
					onChange={(event) => {
						setValue('searchInput', event.target.value, {
							shouldValidate: true
						})
					}}
					ref={register({
						required: true,
						minLength: 1,
						validate: (value) => value.trim().length > 0
					})}
				/>
				<Box py={2}>
					<Button
						variant='purple'
						disabled={!isValid}
					>
						Search
				</Button>
				</Box>
			</Flex>
		</Box>
	)
}

Search.propTypes = {
	valueSearched: PropTypes.string
}

export default Search
