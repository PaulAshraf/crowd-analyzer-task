import React from 'react'
import PropTypes from 'prop-types'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts'
import { mainColor, secondaryColor, textColor } from '../constants/colors'
import styled from 'styled-components'

const Chart = ({ title, data }) => {
	const fontSize = 13

	return (
		<FlexElement>
			<Wrapper>
				<Title>{title}</Title>
				<BarChart width={500} height={250} data={data} margin={0}>
					<CartesianGrid strokeDasharray='3 3' stroke={secondaryColor} />
					<XAxis
						dataKey='name'
						stroke={secondaryColor}
						tick={{ fontSize: fontSize }}
					/>
					<YAxis stroke={secondaryColor} tick={{ fontSize: fontSize }} />
					<Tooltip />
					<Bar dataKey='Count' fill={mainColor} />
				</BarChart>
			</Wrapper>
		</FlexElement>
	)
}

const FlexElement = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;

	@media (max-width: 1200px) {
		width: 100%;
	}
`

const Title = styled.h2`
	font-weight: 800;
	margin: 0;
	padding: 0;
	margin-bottom: 15px;
	color: ${textColor};
`

const Wrapper = styled.div`
	padding: 25px;
	margin: 50px;
	background-color: white;
	border-radius: 15px;
`

Chart.propTypes = {
	title: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.exact({
			name: PropTypes.string,
			count: PropTypes.number,
		})
	),
}

export default Chart
