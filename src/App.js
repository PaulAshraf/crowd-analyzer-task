import React, { useState, useEffect } from 'react'
import ChartContainer from './components/ChartContainer'
import { api } from './constants/urls'
import axios from 'axios'

function App() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

	const getData = async () => {
		try {
			const data = await axios.get(api)
			setData(data.data.data)
			setLoading(false)
		} catch (error) {
			setError(error.message)
			console.error(error)
			setLoading(false)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<ChartContainer chartsData={data} loading={loading} error={error} />
		</div>
	)
}

export default App
