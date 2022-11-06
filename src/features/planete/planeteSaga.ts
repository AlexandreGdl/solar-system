import { put, takeLatest } from 'redux-saga/effects';
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
    // Improvement: Implement Sentry to catch error like those
    console.error(e);
  } finally {
    yield put(updatePending(false));
  }
}

// Handle All the request made to fetch planetes
function* planeteSaga() {
  yield takeLatest(planetesAction.PLANETES_FETCH_REQUESTED, fetchPlanetes);
}

export default planeteSaga;
