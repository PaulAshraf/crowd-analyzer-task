import styled from 'styled-components'
import { mainColor } from '../constants/colors'

export const Button = styled.button`
	background-color: ${mainColor};
	width: ${(props) => `${props.width}%` || 'fit-content'};
	font-weight: 600;
	color: white;
	height: 50px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	outline: none;
	border: none;
	font-family: 'Montserrat';

	:hover {
		cursor: pointer;
	}
`
