import { REQUEST_PRODUCTS } from "./types";
import { actionGetProductsSucceed, actionGetProductsFailed } from "./actions";
import { getProductsData } from "../../api/productsApi";
import { call, takeLatest, put } from "redux-saga/effects";

function* getProductsSaga() {
  try {
    const data = yield call(getProductsData);
    yield put(actionGetProductsSucceed(data));
  } catch (error) {
    yield put(actionGetProductsFailed(error));
  }
}

export function* watchProductsSaga() {
  yield takeLatest(REQUEST_PRODUCTS, getProductsSaga);
}
