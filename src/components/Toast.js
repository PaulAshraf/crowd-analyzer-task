import { css } from 'styled-components'
import { toast } from 'react-toastify'

const generatedCss = css`
	font-family: 'Montserrat';
`
const className = generatedCss.toString()

const Toast = ({ type, msg }) => {
	if (type === 'success')
		return toast.success('Chart Added', {
			position: 'bottom-center',
			className,
		})
	if (type === 'error')
		return toast.error(msg, {
			position: 'bottom-center',
			className,
		})
}

export default Toast
