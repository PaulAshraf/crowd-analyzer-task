import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { mainColor, textColor } from '../constants/colors'

const Header = ({ onClick }) => {
	return (
		<Wrapper>
			<Title>Internal Dashboard</Title>
			<Button onClick={onClick}>+ Add Chart</Button>
		</Wrapper>
	)
}

const Button = styled.div`
	background-color: ${mainColor};
	font-weight: 600;
	color: white;
	height: 50px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 10px;
	display: flex;
	align-items: center;

	:hover {
		cursor: pointer;
	}
`

const Title = styled.h1`
	margin: 0;
	padding: 0;
	font-weight: 800;
	color: ${textColor};
`

const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;
`

Header.propTypes = {
	onClick: PropTypes.func,
}

export default Header
