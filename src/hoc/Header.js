import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { textColor } from '../constants/colors'
import AddForm from './AddForm'
import { Button } from '../components/Button'

const Header = ({ onClick, showForm, getData, toggleForm }) => {
	const buttonRef = useRef()

	return (
		<Wrapper>
			<Title>Internal Dashboard</Title>
			<Button onClick={onClick} ref={buttonRef} showForm={showForm}>
				+ Add Chart
			</Button>
			{showForm ? (
				<AddForm
					parentRef={buttonRef}
					showForm={showForm}
					getData={getData}
					toggleForm={toggleForm}
				/>
			) : (
				<></>
			)}
		</Wrapper>
	)
}

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
	showForm: PropTypes.bool,
}

export default Header
