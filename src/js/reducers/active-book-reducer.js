// state is not application state
// only the state this reducer is responsible for
// setting state = null as a start
export default function(state = null, action){

  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload
  };

  // we return the state as default
  return state;

}
