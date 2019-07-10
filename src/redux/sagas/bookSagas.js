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

 // Get all levels function:
 function* fetchBookLevels(action) {
  try {
    const levelResponse = yield axios.get('/api/books/levels')
    console.log('hey levels!', levelResponse);
    
    yield put({ type: 'SET_LEVELS', payload: levelResponse.data });
    console.log('end of fetchBookLevels')
  } catch (error) {
    console.log(error);
  }
};

  // Get specific book
  function* selectBookSaga(action) {
    const getBook = yield axios.get(`/api/books/${action.payload}`)
    yield put({ type: 'SET_INDIVIDUAL_BOOK', payload: getBook.data })
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

//POST new book
function* postBookSaga(action) {
  console.log('hit!');
  try {
    console.log(action.payload);
    yield axios.post('/api/books', action.payload);
    yield put({type: 'FETCH_BOOKS'})
  }
  catch (error) {
    console.log('ERROR WITH POST:', error);
  }
}

//DELETE book
function* deleteBookSaga(action) {
  console.log('deleteBookSaga hit')
  try {
    yield axios.delete(`/api/books/${action.payload}`)
    yield put({type: 'FETCH_BOOKS'})
  } catch (error) {
    console.log(error);
    alert('Unable to delete item');
  }
}

//all Book Sagas
function* bookSagas() {
    yield takeEvery('FETCH_BOOKS', fetchBooksSaga)
    yield takeEvery('SELECT_BOOK', selectBookSaga)
    yield takeEvery('EDIT_BOOK', editBookSaga )
    yield takeEvery('POST_BOOK', postBookSaga)
    yield takeEvery('DELETE_BOOK', deleteBookSaga)
    yield takeEvery('FETCH_LEVELS', fetchBookLevels)
}


export default bookSagas;