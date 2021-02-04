import { createSlice, createAction } from '@reduxjs/toolkit'

const isCreationFinished = (action) => {
	return (
		action.type.startsWith('charts/create') &&
		(action.type.endsWith('Rejected') || action.type.endsWith('Success'))
	)
}
const createChartRequest = createAction('charts/createRequested')

const initialState = {
	isOpen: false,
	loading: false,
}
const addFormSlice = createSlice({
	name: 'addForm',
	initialState,
	reducers: {
		open: (state) => {
			state.isOpen = true
		},
		close: (state) => {
			state.isOpen = false
		},
		toggle: (state) => {
			state.isOpen = !state.isOpen
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createChartRequest, (state) => {
				state.loading = true
			})
			.addMatcher(isCreationFinished, (state) => {
				state.isOpen = false
				state.loading = false
			})
	},
})

export const { open, close, toggle } = addFormSlice.actions
export default addFormSlice.reducer
