import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrganizedBooks extends Component {
    render() {
        return (
            <>
            <h1>Level C Books</h1>
            {this.props.reduxState.allBooksReducer.map(book =>
                        <IndividualBookList key={book.id} book={book} history={this.props.history} />
            )} 
            </>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(OrganizedBooks);