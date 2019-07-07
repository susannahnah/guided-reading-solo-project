import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualBookList from '../IndividualBookList/IndividualBookList';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom'


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
            {this.props.location.state ?
            <>
            <pre>
                    {JSON.stringify(this.props.location.state, null, 2)}
                </pre>
                {this.props.user.id === 1 &&
                <button>Add New Book</button>
                }
                <br />
                <h1>Level {this.props.location.state.level}</h1>
                <Grid container>
                    {this.props.reduxState.allBooksReducer.map(book => {
                       
                        if (book.level === this.props.location.state.level) {
                            return <IndividualBookList key={book.id} book={book} history={this.props.history} />
                        }
                    })}


                </Grid>
            </>
            :
            <>
            <Redirect to="/welcome" />
            </>
            }
                
            </>

        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
    user: reduxState.user,
});

export default connect(mapStateToProps)(OrganizedBooks);