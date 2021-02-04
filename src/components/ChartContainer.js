import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRequested as fetchCharts } from '../redux/charts'
import Chart from './Chart'
import { bgColor } from '../constants/colors'
import CenterIcon from '../common/CenterIcon'
import { ToastContainer } from 'react-toastify'

const ChartContainer = () => {
	const dispatch = useDispatch()

	const charts = useSelector((state) => state.charts.charts)
	const loading = useSelector((state) => state.charts.loading)
	const error = useSelector((state) => state.charts.error)

	useEffect(() => {
		dispatch(fetchCharts())
	}, [dispatch])

	return (
		<div>
			{!loading && !error ? (
				<Wrapper>
					{charts.map((chart, i) => (
						<Chart key={chart.id} delay={i * 250} {...chart} />
					))}
				</Wrapper>
			) : (
				<CenterIcon error={error} loading={loading} />
			)}
			<ToastContainer />
		</div>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	background-color: ${bgColor};
`

export default ChartContainer
