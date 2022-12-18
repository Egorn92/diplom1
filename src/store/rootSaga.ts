import { all } from "redux-saga/effects";
import { watchProductsSaga } from "../redux/products/sagas";

export function* rootSaga() {
  yield all([watchProductsSaga()]);
}
