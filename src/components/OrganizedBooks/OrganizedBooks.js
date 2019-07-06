import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualBookList from '../IndividualBookList/IndividualBookList';
import Grid from '@material-ui/core/Grid';


class OrganizedBooks extends Component {

    getBooks = () => {
        this.props.dispatch({ type: 'FETCH_BOOKS' })
    };

    componentDidMount() {
        this.getBooks()
    }

    render() {
        return (
            <>
                <h1>Level C</h1>
                <Grid container>
                    {this.props.reduxState.allBooksReducer.map(book => {
                        if ( book.level === 'C' ) {
                            return <IndividualBookList key={book.id} book={book} history={this.props.history} />
                        }
                    })}
                    <pre>
                        {JSON.stringify(this.props.reduxState.allBooksReducer, null, 2)}
                    </pre>

                </Grid>
            </>

        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(OrganizedBooks);