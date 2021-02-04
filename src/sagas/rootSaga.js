import { all } from 'redux-saga/effects'
import { chartsWatcher } from './chartsSaga'

export default function* rootSaga() {
	yield all([chartsWatcher()])
}
