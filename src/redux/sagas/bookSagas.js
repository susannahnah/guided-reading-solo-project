import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


  // // Get all books function:
  function* fetchBooksSaga(action) {
    try {
      const bookResponse = yield axios.get('/books')
      yield put({ type: 'SET_BOOKS', payload: bookResponse.data });
      console.log('end of fetchBooksSaga')
    } catch (error) {
      console.log(error);
    }
  };
   
function* bookSagas() {
    yield takeEvery('FETCH_BOOKS', fetchBooksSaga)
}



export default bookSagas;