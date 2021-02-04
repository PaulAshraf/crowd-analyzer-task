import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import showToast from '../common/showToast'

const initialState = {
	charts: [],
	loading: false,
	error: null,
}

const chartsSlice = createSlice({
	name: 'charts',
	initialState,
	reducers: {
		//Fetch Charts
		fetchRequested: (state) => {
			state.loading = true
		},
		fetchSuccess: (state, action) => {
			state.loading = false
			state.charts = action.payload
		},
		fetchRejected: (state, action) => {
			state.loading = false
			state.error = action.payload
		},

		//Create Chart
		createRequested: {
			reducer: (state) => {
				// state.loading = true
			},
			prepare: (data) => {
				const id = uuidv4()
				return { payload: { id, ...data } }
			},
		},
		createSuccess: (state, action) => {
			state.loading = false
			state.charts.push(action.payload)
			showToast({ type: 'success', msg: null })
		},
		createRejected: (state, action) => {
			state.loading = false
			// state.error = action.payload
			showToast({ type: 'error', msg: action.payload })
		},
	},
})

export const {
	fetchRequested,
	fetchSuccess,
	fetchRejected,

	createRequested,
	createSuccess,
	createRejected,
} = chartsSlice.actions
export default chartsSlice.reducer
