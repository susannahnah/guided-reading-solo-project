import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import './IndividualBookList.css';
import { makeStyles } from '@material-ui/core/styles';



class IndividualBookList extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'SELECT_BOOK', payload: this.props.book.id })
        this.props.history.push(`/bookdetails/${this.props.book.id}`)
    }



    render() {

        return (
            
            <Grid item xs={12} sm={6} md={4} lg={3} key={this.props.book.id}>
                <Card className='specificBook' onClick={this.handleClick}>
                    <CardHeader
                        title={this.props.book.title}
                        subheader={this.props.book.author}
                    />
                    <CardMedia
                        className="media"
                        image={this.props.book.image} 
                        // title={this.props.books.title + "image"}
                    />
                    {/* <img src={this.props.book.image} onClick={this.handleClick} /> */}
                    {/* <br /> */}
                    {/* <h2>{this.props.book.title}</h2>
                    <h3>{this.props.book.author}</h3> */}
                    {/* <br />
                    <br />
                    <br /> */}
                </Card>
            </Grid>
        )
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
    user: reduxState.user,
});

export default connect(mapStateToProps)(IndividualBookList);
