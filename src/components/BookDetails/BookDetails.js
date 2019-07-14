import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

class BookDetails extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'SELECT_BOOK',
            payload: this.props.match.params.id,
        })
    };

    handleBackClick = (level) => {
        this.props.history.push({
            pathname: '/organizedbooks',
            state: {
                level: level
            }
        })
    }


    handleEditClick = () => {
        this.props.history.push('/edit')
    };

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
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>
                            {this.props.reduxState.individualBookReducer.title}
                        </h1>
                    </Grid>
                    <Grid item xs={12}>
                    <h2>{this.props.reduxState.individualBookReducer.author}</h2>
                    </Grid>
                    <br />
                    <img alt=
                        {this.props.reduxState.individualBookReducer.title} src=
                        {this.props.reduxState.individualBookReducer.image} onClick={this.handleClick} />
                    <br />
                    <br />
                    {this.props.reduxState.individualBookReducer.summary}
                    <br />
                    <br />
                    {this.props.reduxState.individualBookReducer.grade}
                    <br />
                    <br />
                    {this.props.reduxState.individualBookReducer.level}
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
