import React, { useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts'
import { mainColor, secondaryColor, textColor } from '../constants/colors'
import styled from 'styled-components'

const Chart = ({ title, data, delay }) => {
	const fontSize = 13

	const getWidth = () => {
		if (window.innerWidth < 600) return window.innerWidth - 150
		else return 500
	}
	const [width, setWidth] = useState(getWidth())

	useLayoutEffect(() => {
		const updateWidth = () => {
			setWidth(getWidth())
		}
		window.addEventListener('resize', updateWidth)
		return () => window.removeEventListener('resize', updateWidth)
	}, [])

	return (
		<FlexElement data-cy='chart'>
			<Wrapper>
				<Title>{title}</Title>
				<BarChart width={width} height={250} data={data} margin={0}>
					<CartesianGrid strokeDasharray='3 3' stroke={secondaryColor} />
					<XAxis
						dataKey='name'
						stroke={secondaryColor}
						tick={{ fontSize: fontSize }}
					/>
					<YAxis stroke={secondaryColor} tick={{ fontSize: fontSize }} />
					<Tooltip />
					<Bar
						dataKey='Count'
						fill={mainColor}
						animationBegin={delay}
						radius={[5, 5, 0, 0]}
					/>
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
	background-color: white;
	border-radius: 15px;
	margin-bottom: 25px;
`

Chart.propTypes = {
	title: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.exact({
			name: PropTypes.string,
			Count: PropTypes.number,
		})
	),
}

export default Chart
