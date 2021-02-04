import React from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { mainFont } from '../constants/fonts'

const showToast = ({ type, msg }) => {
	if (type === 'success')
		return toast.success(<Text>✨ Chart added succefully!</Text>, {
			position: 'bottom-center',
		})
	if (type === 'error')
		return toast.error(<Text>{`⚠️ ${msg}`}</Text>, {
			position: 'bottom-center',
		})
}

const Text = styled.div`
	font-family: '${mainFont}';
`

export default showToast
