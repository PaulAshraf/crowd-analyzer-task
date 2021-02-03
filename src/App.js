import React, { useState, useEffect } from 'react'
import ChartContainer from './hoc/ChartContainer'
import styled from 'styled-components'
import { api } from './constants/urls'
import axios from 'axios'
import Header from './hoc/Header'
import { bgColor } from './constants/colors'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)
	const [showForm, setShowForm] = useState(false)

	const getData = async () => {
		try {
			const response = await axios.get(api)
			console.log(response)
			setData(response.data)
			setLoading(false)
		} catch (error) {
			setError(error.message)
			console.error(error)
			setLoading(false)
		}
	}

	const toggleForm = () => {
		setShowForm(!showForm)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<Main>
			<Header
				onClick={toggleForm}
				showForm={showForm}
				getData={getData}
				toggleForm={toggleForm}
			/>
			<ChartContainer chartsData={data} loading={loading} error={error} />
		</Main>
	)
}

const Main = styled.main`
	background-color: ${bgColor};
	padding: 50px;
`

export default App
