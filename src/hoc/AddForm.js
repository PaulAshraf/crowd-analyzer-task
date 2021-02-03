import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { bgColor, mainColor, textColor } from '../constants/colors'
import { ToastContainer } from 'react-toastify'
import Toast from '../components/Toast'
import ClipLoader from 'react-spinners/ClipLoader'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { api } from '../constants/urls'

const initialState = {
	title: 'Mentions sentiment analysis',
	data: [
		{
			name: '2020-04-03',
			Count: 0,
		},
		{
			name: '2020-04-04',
			Count: 10916,
		},
		{
			name: '2020-04-05',
			Count: 15484,
		},
		{
			name: '2020-04-06',
			Count: 20286,
		},
		{
			name: '2020-04-07',
			Count: 13633,
		},
		{
			name: '2020-04-08',
			Count: 43444,
		},
		{
			name: '2020-04-09',
			Count: 35568,
		},
	],
}

const AddForm = ({ parentRef, showForm, width = 300, getData, toggleForm }) => {
	const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = parentRef.current
	const [left, setLeft] = useState(offsetLeft)
	const [charts, setCharts] = useState(initialState)
	const [loading, setLoading] = useState(false)

	useLayoutEffect(() => {
		const updateLeft = () => {
			setLeft(parentRef.current.offsetLeft)
		}
		window.addEventListener('resize', updateLeft)
		return () => window.removeEventListener('resize', updateLeft)
	}, [parentRef])

	const updateCount = (e) => {
		if (e.target.name.includes('crowdanalyzer-title')) {
			console.log(e.target.name, e.target.value)
			charts.title = e.target.value
		}
		if (e.target.name.includes('crowdanalyzer-data-count')) {
			const newValue = parseInt(e.target.value)
			const key = parseInt(e.target.name.split('-')[3])
			charts.data[key].Count = newValue
		}
		setCharts(charts)
	}

	const submit = async (e) => {
		e.preventDefault()
		setLoading(true)
		try {
			await axios.post(api, { id: uuidv4(), ...charts })
			Toast({ type: 'success', msg: null })
			getData()
		} catch (error) {
			console.error(error)
			Toast({ type: 'error', msg: error.message })
		}
		setLoading(false)
	}

	return (
		<Wrapper
			parentTop={offsetTop}
			parentLeft={left}
			parentHeight={offsetHeight}
			parentWidth={offsetWidth}
			width={width}
			showForm={showForm}
		>
			<Title>Title</Title>
			<Input name='crowdanalyzer-title' onChange={updateCount} />
			<hr color='white' />
			<Title>Data</Title>
			{charts.data.map((row, i) => (
				<FormRow key={i}>
					{row.name}
					<Input
						type='number'
						name={`crowdanalyzer-data-count-${i}'`}
						width={40}
						defaultValue={row.Count}
						onChange={updateCount}
					/>
				</FormRow>
			))}
			<FormRow>
				<Button type='submit' onClick={submit}>
					{!loading ? 'Add' : <ClipLoader color='#fff' />}
				</Button>
			</FormRow>
			<ToastContainer />
		</Wrapper>
	)
}

const Title = styled.div`
	font-weight: 800;
	margin: 0;
	padding: 0;
	margin-bottom: 15px;
	color: ${textColor};
`

const Input = styled.input`
	border: none;
	width: ${(props) => props.width || 100}%;
	height: 25px;
	border-bottom: 2px solid ${mainColor};
	font-family: 'Montserrat';
	color: ${mainColor};
	background-color: ${bgColor};
	/* padding-left: 5px; */

	:focus {
		outline: none;
	}
`

const FormRow = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${textColor};
	align-items: center;
	margin: 10px;
`

const Wrapper = styled.form`
	width: ${(props) => props.width}px;
	background-color: white;
	border-radius: 15px;
	padding: 25px;
	position: absolute;
	top: ${(props) => props.parentTop + props.parentHeight + 5}px;
	left: ${(props) => props.parentLeft + props.parentWidth - props.width - 50}px;
	z-index: 10;
	box-shadow: 10px 10px 30px 1px rgba(0, 0, 0, 0.75);
`

export default AddForm
