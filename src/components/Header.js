import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../redux/addForm'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { textColor } from '../constants/colors'
import AddForm from './AddForm'
import { Button } from '../common/Button'

const Header = () => {
	const buttonRef = useRef()

	const dispatch = useDispatch()

	const showForm = useSelector((state) => state.addForm.isOpen)

	return (
		<Wrapper>
			<Title>Internal Dashboard</Title>
			<Button
				onClick={() => dispatch(toggle())}
				ref={buttonRef}
				data-cy='add-button'
			>
				+ Add Chart
			</Button>
			{showForm ? <AddForm parentRef={buttonRef} /> : <></>}
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
