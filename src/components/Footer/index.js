import React from 'react'
import { Flex, Text } from 'rebass'
import {
	FaGithub as GithubIcon,
	FaLinkedin as LinkedinIcon
} from 'react-icons/fa'

import { sizing } from '../../theme'
import Anchor from '../../components/Anchor'

const Footer = () => {

	const Signature = () => {
		return (
			<Flex px={2} color='white' bg='purple' alignItems='center' justifyContent='center'>
				<Text>@ Designed by Rafael Biassio</Text>
				<Anchor
					icon={<GithubIcon />}
					href="https://github.com/rafabiassio"
					target="_blank"
				/>
				<Anchor
					icon={<LinkedinIcon />}
					href="https://www.linkedin.com/in/rafael-biassio/"
					target="_blank"
				/>
			</Flex>
		)
	}

	return (
		<Flex
			sx={{
				position: 'fixed',
				bottom: '0',
				width: '100%',
				height: `${sizing.footerHeight}`,
				justifyContent: 'center',
				alignItems: 'center',
				bg: 'purple',
				color: 'white'
			}}
		>
			<Signature />
		</Flex>
	)
}

export default Footer
