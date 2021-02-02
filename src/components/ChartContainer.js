import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Chart from './Chart'
import { bgColor } from '../constants/colors'
import CenterIcon from './CenterIcon'

const ChartContainer = ({ chartsData, loading, error }) => {
	return (
		<div>
			{!loading && chartsData ? (
				<Wrapper>
					{chartsData.map((chart, i) => (
						<Chart key={chart.id} delay={i * 250} {...chart} />
					))}
				</Wrapper>
			) : (
				<CenterIcon error={error} loading={loading} />
			)}
		</div>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	background-color: ${bgColor};
`

ChartContainer.propTypes = {
	chartsData: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string,
			title: PropTypes.string,
			data: PropTypes.arrayOf(
				PropTypes.exact({
					name: PropTypes.string,
					Count: PropTypes.number,
				})
			),
		})
	),
	error: PropTypes.string,
	loading: PropTypes.bool,
}

export default ChartContainer
