import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import ChartContainer from './components/ChartContainer'
import { bgColor } from './constants/colors'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './common/Footer'

function App() {
	return (
		<Main>
			<Header />
			<ChartContainer />
			<Footer />
		</Main>
	)
}

const Main = styled.main`
	background-color: ${bgColor};
	padding: 50px;
`

export default App
