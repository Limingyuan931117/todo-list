import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";
import { getAllSuccess, getAllFailure } from "../actions";
import { getAllVersions } from "../services/apis";

function* getAllItems() {
  try {
    const result = yield call(getAllVersions);

    yield put(getAllSuccess(result));
  } catch (e) {
    yield put(getAllFailure());
  }
}

function* saga() {
  yield all([takeLatest("GET_ALL", getAllItems)]);
}

export default saga;
