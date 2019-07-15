import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualBookList from '../IndividualBookList/IndividualBookList';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import './OrganizedBooks.css';


class OrganizedBooks extends Component {

    getBooks = () => {
        this.props.dispatch({ type: 'FETCH_BOOKS' })
    };

    componentDidMount() {
        this.getBooks()
        window.scrollTo(0,0);
    }

    handleNewBookClick = () => {
        this.props.history.push('/newbook')
    };

    handleBackClick = () => {
        this.props.history.push('/welcome')
    };

    render() {
        return (
            <>
            {this.props.location.state ?
            <>
                <AppBar position="static">
                <Button style={{width:"4vw"}} variant="contained" color="inherent" onClick={this.handleBackClick}>Back</Button>
                <h2 style={{display:"inline-block"}}>Level {this.props.location.state.level}</h2>
                
                </AppBar>
                
                <Grid container className='bookList' style={{padding:"20px"}} spacing={3}>
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