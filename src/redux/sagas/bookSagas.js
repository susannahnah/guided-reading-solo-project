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

  // Get specific book
  function* selectBookSaga(action) {
    yield put({ type: 'SET_INDIVIDUAL_BOOK', payload: action.payload })
    // const bookGenre = yield axios.get(`/book_genres?id=${action.payload.id}`)
    //   yield put ({ type: 'SET_GENRES', payload: bookGenre.data })
    // const bookGrade = yield axios.get(`/grade_levels?id=${action.payload.id}`)
    //   yield put ({ type: 'SET_GRADES', payload: bookGrade.data })
    console.log('end of selectBookSaga');
  }
   
//UPDATE specific book
function* editBookSaga(action) {
  yield axios.put(`/api/books`, action.payload)
  yield put({ type: 'FETCH_BOOKS'})
}

//all Book Sagas
function* bookSagas() {
    yield takeEvery('FETCH_BOOKS', fetchBooksSaga)
    yield takeEvery('SELECT_BOOK', selectBookSaga)
    yield takeEvery('EDIT_BOOK', editBookSaga )
}



export default bookSagas;