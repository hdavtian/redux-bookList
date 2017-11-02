import React, {Component} from 'react';
import {connect} from 'react-redux';

class ActiveBook extends Component {
  render(){

    if(!this.props.book){
      return (<p>Select a book</p>)
    }

    return (
      <div>
        <h1>{this.props.book.title}</h1>
        <hr />
        <div>
          <img src={this.props.book.previewImg} align="left" />
          {this.props.book.description}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(ActiveBook);
