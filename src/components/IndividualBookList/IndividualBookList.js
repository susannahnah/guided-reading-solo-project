import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import './IndividualBookList.css';
import Paper from '@material-ui/core/Paper';


class IndividualBookList extends Component {

//click command to select specific book (image, title, author)
//user navigated to individual book page after selecting specific book
    handleClick = () => {
        this.props.dispatch({ type: 'SELECT_BOOK', payload: this.props.book.id })
        this.props.history.push(`/bookdetails/${this.props.book.id}`)
    }



    render() {

        return (
            
            <Grid item xs={12} sm={6} md={4} lg={3} key={this.props.book.id}>
                <Paper>
                <Card className='specificBook' onClick={this.handleClick}>
                    <CardHeader
                        title={this.props.book.title}
                        subheader={this.props.book.author}
                    />
                    <CardMedia
                        component="img"
                        className="media"
                        src={this.props.book.image} 
                    />
                </Card>
                </Paper>
            </Grid>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
    user: reduxState.user,
});

export default connect(mapStateToProps)(IndividualBookList);
