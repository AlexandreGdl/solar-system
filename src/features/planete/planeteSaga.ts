import { put, takeEvery } from 'redux-saga/effects';
import { getPlanetes } from '../../api/planetes';
import { planetesAction } from './planeteAction';
import { updatePlanete, updateLoading } from './planeteSclice';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPlanetes() {
  try {
    yield put(updateLoading(true));
    const b: ApiResponse<Planet[]> = yield getPlanetes();
    yield put(updatePlanete(b.bodies));
    yield put(updateLoading(false));
  } catch (e: any) {
    console.log(e);
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* planeteSaga() {
  yield takeEvery(planetesAction.PLANETES_FETCH_REQUESTED, fetchPlanetes);
}

export default planeteSaga;
