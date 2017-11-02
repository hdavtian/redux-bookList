export default function selectBook(book){
  // this is an action createStore
  // it needs to return an action which is an object with at least a `type` property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
