import React from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { mainFont } from '../constants/fonts'

const showToast = ({ type, msg }) => {
	if (type === 'success')
		return toast.success(
			<Text data-cy='toast-success'>✨ Chart added successfully!</Text>,
			{
				position: 'bottom-center',
			}
		)
	if (type === 'error')
		return toast.error(<Text data-cy='toast-error'>{`⚠️ ${msg}`}</Text>, {
			position: 'bottom-center',
		})
}

const Text = styled.div`
	font-family: '${mainFont}';
`

export default showToast
