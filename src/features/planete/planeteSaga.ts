import { put, takeEvery } from 'redux-saga/effects';
import { getPlanetes } from '../../api/planetes';
import { planetesAction } from './planeteAction';
import { updatePlanete, updatePending } from './planeteSclice';

// Worker Sage : Fetch all the planetes through API
function* fetchPlanetes() {
  yield put(updatePending(true));
  try {
    const b: ApiResponse<Planet[]> = yield getPlanetes();
    yield put(updatePlanete(b.bodies));
  } catch (e: any) {
    // yield put(fetchFailed());
    // Should handle error
  } finally {
    yield put(updatePending(false));
  }
}

// Handle All the request made
function* planeteSaga() {
  yield takeEvery(planetesAction.PLANETES_FETCH_REQUESTED, fetchPlanetes);
}

export default planeteSaga;
