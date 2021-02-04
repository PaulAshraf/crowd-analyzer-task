import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import chartsReducer from './redux/charts'
import addFormReducer from './redux/addForm'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
	reducer: {
		charts: chartsReducer,
		addForm: addFormReducer,
	},
	middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)
