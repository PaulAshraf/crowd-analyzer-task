import React from 'react'
import styled from 'styled-components'
import { textColor } from '../constants/colors'

const Footer = () => {
	return <Wrapper>Paul Ashraf ©️ 2021</Wrapper>
}

const Wrapper = styled.footer`
	margin: auto;
	width: fit-content;
	color: ${textColor};
	left: 0;
	bottom: 0;
`

export default Footer
