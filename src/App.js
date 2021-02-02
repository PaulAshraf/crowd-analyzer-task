import Chart from './components/Chart'
import ChartContainer from './components/ChartContainer'

const data = [
	{
		id: '1',
		title: 'Owned posts over time',
		data: [
			{
				name: '2020-04-03',
				Count: 0,
			},
			{
				name: '2020-04-04',
				Count: 17,
			},
			{
				name: '2020-04-05',
				Count: 21,
			},
			{
				name: '2020-04-06',
				Count: 33,
			},
			{
				name: '2020-04-07',
				Count: 41,
			},
			{
				name: '2020-04-08',
				Count: 32,
			},
			{
				name: '2020-04-09',
				Count: 33,
			},
		],
	},
	{
		id: '2',
		title: 'Posts interactions over time',
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
	},
	{
		id: '3',
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
	},
]

function App() {
	return (
		<div>
			<ChartContainer chartsData={data} />
		</div>
	)
}

export default App
