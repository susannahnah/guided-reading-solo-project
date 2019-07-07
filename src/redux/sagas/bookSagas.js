import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


  // // Get all books function:
  function* fetchBooksSaga(action) {
    try {
      const bookResponse = yield axios.get('/api/books')
      console.log('hey books!', bookResponse);
      
      yield put({ type: 'SET_BOOKS', payload: bookResponse.data });
      console.log('end of fetchBooksSaga')
    } catch (error) {
      console.log(error);
    }
  };

  // Get specific books
  // function* selectBookSaga(action) {
  //   yield put({ type: 'SET_INDIVIDUAL_BOOK', payload: action.payload.id })
  //   const bookGenre = yield axios.get(`/book_genres?id=${action.payload.id}`)
  //   yield put ({ type: 'SET_GENRES', payload: bookGenre.data })
  //   console.log('end of selectBookSaga');

  // }
   
function* bookSagas() {
    yield takeEvery('FETCH_BOOKS', fetchBooksSaga)
}



export default bookSagas;