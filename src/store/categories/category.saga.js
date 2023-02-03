import { takeLatest, all, call, put  } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesFail, fetchCategoriesSuccess } from "./category.action";

import { CATEGORY_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoryArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoryArray))
  } catch (error) {
    yield put(fetchCategoriesFail(error));
  }
}

export function* onFetchCatgeories() {
  yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync )
}

export function* categoriesSaga(){
  yield all([call(onFetchCatgeories)])

}

