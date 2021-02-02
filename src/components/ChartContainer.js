import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PuffLoader from 'react-spinners/PuffLoader'
import Chart from './Chart'
import { bgColor, mainColor } from '../constants/colors'

const ChartContainer = ({ chartsData }) =>
	chartsData ? (
		<Wrapper>
			{chartsData.map((chart) => (
				<Chart key={chart.id} {...chart} />
			))}
		</Wrapper>
	) : (
		<Loading>
			<PuffLoader color={mainColor} />
		</Loading>
	)

const Loading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

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
					count: PropTypes.number,
				})
			),
		})
	),
}

export default ChartContainer
