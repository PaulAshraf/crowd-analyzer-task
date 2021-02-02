import React, { useState, useEffect } from 'react'
import ChartContainer from './components/ChartContainer'
import styled from 'styled-components'
import { api } from './constants/urls'
import axios from 'axios'
import Header from './components/Header'
import { bgColor } from './constants/colors'

function App() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

	const getData = async () => {
		try {
			const response = await axios.get(api)
			setData(response.data.data)
			setLoading(false)
		} catch (error) {
			setError(error.message)
			console.error(error)
			setLoading(false)
		}
	}

	const addChart = () => {
		console.log('add')
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<Main>
			<Header onClick={addChart} />
			<ChartContainer chartsData={data} loading={loading} error={error} />
		</Main>
	)
}

const Main = styled.main`
	background-color: ${bgColor};
	padding: 50px;
`

export default App
