import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualBookList from '../IndividualBookList/IndividualBookList';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';



class OrganizedBooks extends Component {

    getBooks = () => {
        this.props.dispatch({ type: 'FETCH_BOOKS' })
    };

    componentDidMount() {
        this.getBooks()
    }

    handleNewBookClick = () => {
        this.props.history.push('/newbook')
    };

    render() {
        return (
            <>
            {this.props.location.state ?
            <>
                <AppBar position="static">
                <h2>Level {this.props.location.state.level}</h2>
                </AppBar>
                <Grid container>
                    {this.props.reduxState.allBooksReducer.map(book => {
                       
                        if (book.level === this.props.location.state.level) {
                            return <IndividualBookList key={book.id} book={book} history={this.props.history} />
                        }
                    })}
                </Grid>
                {this.props.user.id === 1 &&
                 <Button variant="contained" color="inherent" onClick={this.handleNewBookClick}>Add New Book</Button>
                }
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