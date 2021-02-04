import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MdError } from 'react-icons/md'
import PuffLoader from 'react-spinners/PuffLoader'
import { mainColor, textColor } from '../constants/colors'

const CenterIcon = ({
	loading,
	error = 'Opps! Something unexpected happened.',
}) => {
	return (
		<Wrapper>
			{loading ? (
				<PuffLoader color={mainColor} />
			) : (
				<Icon>
					<MdError size={64} />
					<ErrorText>{error}</ErrorText>
				</Icon>
			)}
		</Wrapper>
	)
}

const ErrorText = styled.h2`
	color: ${textColor};
`

const Icon = styled.div`
	color: ${mainColor};
	text-align: center;
`

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`
CenterIcon.propTypes = {
	loading: PropTypes.bool,
	error: PropTypes.string,
}

export default CenterIcon
