import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { createRequested, createSuccess, createRejected } from './charts'

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
			.addCase(createRequested, (state) => {
				state.loading = true
			})
			.addMatcher(isAnyOf(createRejected, createSuccess), (state) => {
				state.isOpen = false
				state.loading = false
			})
	},
})

export const { open, close, toggle } = addFormSlice.actions
export default addFormSlice.reducer
