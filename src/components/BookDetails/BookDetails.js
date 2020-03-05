import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import './BookDetails.css';

class BookDetails extends Component {

//property to select specific book from all books
    componentDidMount() {
        this.props.dispatch({
            type: 'SELECT_BOOK',
            payload: this.props.match.params.id,
        })
    };

//back button to go back to previous directory/all books organized by reading level 
    handleBackClick = (level) => {
        this.props.history.push({
            pathname: '/organizedbooks',
            state: {
                level: level
            }
        })
    }

//edit button to edit specific book detail
    handleEditClick = () => {
        this.props.history.push('/edit')
    };

//deleting specific book from database, once deleted, admin returns to welcome page
    handleDeleteClick = () => {
        this.props.dispatch({
            type: 'DELETE_BOOK',
            payload: this.props.match.params.id,
        })
        this.props.history.push('/welcome')
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <>
                <Button variant="contained" color="inherent" onClick={() => this.handleBackClick(this.props.reduxState.individualBookReducer.level)}>Back</Button>
                <Grid container justify="center">
                    <Grid item xs={5} className="GridItTextCenter">
                        <img style={{width:"68%"}} className="bookCover" alt=
                        {this.props.reduxState.individualBookReducer.title} src=
                        {this.props.reduxState.individualBookReducer.image} onClick={this.handleClick} />
                    </Grid>
                    <Grid item xs={5}>
                    <h1>{this.props.reduxState.individualBookReducer.title}</h1>
                    <h2>{this.props.reduxState.individualBookReducer.author}</h2>
                    <p>{this.props.reduxState.individualBookReducer.summary}</p>
                    <p>{this.props.reduxState.individualBookReducer.grade}</p>
                    <p>{this.props.reduxState.individualBookReducer.level}</p>
                    </Grid>
                    <Grid item xs={3} className="GridItTextCenter">
                       <h3><a href={this.props.reduxState.individualBookReducer.library_url}>Library Link</a></h3>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                {this.props.user.id === 1 &&
                    <>
                        <Button variant="contained" color="inherent" onClick={this.handleEditClick}>Edit Book</Button>
                        <Button variant="contained" color="inherent" onClick={this.handleDeleteClick}>Delete Book</Button>
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

export default connect(mapStateToProps)(BookDetails);
