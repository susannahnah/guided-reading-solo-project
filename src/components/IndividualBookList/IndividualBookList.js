import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';


class IndividualBookList extends Component {
    
    handleClick = () => {
        this.props.dispatch({type: 'SELECT_BOOK', payload: this.props.book})
        this.props.history.push('/bookdetails')
    }
    
    render() {
        return (
            <Grid item xs={4} key={this.props.book.id}>
            <h2>{this.props.book.title}</h2>
            <img src={this.props.book.image} onClick={this.handleClick}/>
            <br />
            {this.props.book.author}
            <br />
            <br />
            <br />
         </Grid>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
    user: reduxState.user,
});

export default connect(mapStateToProps)(IndividualBookList);
