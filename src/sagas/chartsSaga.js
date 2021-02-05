import { call, put, takeLatest } from 'redux-saga/effects'
import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { api } from '../constants/urls'

const fetchSuccess = createAction('charts/fetchSuccess')
const fetchRejected = createAction('charts/fetchRejected')

const createSuccess = createAction('charts/createSuccess')
const createRejected = createAction('charts/createRejected')

const fetchAPI = async () => {
	const response = await axios.get(api)
	return response.data
}

const postAPI = async (chart) => {
	const response = await axios.post(api, chart)
	return response.data
}

function* fetchCharts() {
	try {
		const data = yield call(fetchAPI)
		yield put(fetchSuccess(data))
	} catch (error) {
		yield put(fetchRejected(error.message))
	}
}

function* createChart(action) {
	try {
		let data = yield call(postAPI, action.payload)
		if (process.env.NODE_ENV === 'production') data = action.payload
		yield put(createSuccess(data))
	} catch (error) {
		yield put(createRejected(error.message))
	}
}

export function* chartsWatcher() {
	yield takeLatest('charts/fetchRequested', fetchCharts)
	yield takeLatest('charts/createRequested', createChart)
}
