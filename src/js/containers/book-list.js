import React, {Component} from 'react';
import selectBook from '../actions/index';
import {bindActionCreators} from 'redux'; // needed for binding actions

// Step 1: import react-redux
import { connect } from 'react-redux';

class BookList extends Component {

  constructor(props){
    super(props);
    this.updateBook = this.updateBook.bind(this);
  }

  clickHandler(event){
    event.target.parentNode.childNodes.forEach((li)=>{li.classList.remove('active')});
    event.target.classList.add('active');
  }

  updateBook(book){
    this.props.selectBook(book);
  }

  renderList(){
    return this.props.books.map( (book) => {
      return (
        <li
          key={book.title}
          onClick={(event) => {this.updateBook(book); this.clickHandler(event)}}
          className="list-group-item list-book-name">{book.title}
        </li>
      )
    })
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// step 2: add mapStateToProps()
function mapStateToProps(state){

  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){

  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// step 3: call connect()
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
