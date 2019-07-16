import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import './NewBook.css'
import { Button } from '@material-ui/core';


class NewBook extends Component {
    state = {
        newBook: {
            title: '',
            author: '',
            image: '',
            level: '',
            grade: '',
            summary: '',
            library_url: '',
        }
    }

    populateData = () => {
        this.setState({
            newBook: {
                title: 'Busy-Eyed Day',
                author: 'Anne Marie Pace',
                image: 'images/busyeyeday.jpg',
                level: 'C',
                grade: 'K - 1st',
                summary: 'Two siblings, along with their grandmother and mother, spend a day taking in the sights at the park',
                library_url: 'https://hclib.bibliocommons.com/item/show/5702696109',
            }
        })
    }


    handleNewChange = (propertyName) => (event) => {
        console.log('event happened')
        this.setState({
            newBook: {
                ...this.state.newBook,
                [propertyName]: event.target.value,
            }
        });
    }

    addNewBook = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_BOOK', payload: this.state.newBook })
        this.props.history.push('/welcome')
    }

    render() {
        return (
            <div>
                <h3 onClick={this.populateData}>Add New Book</h3>
                <form onSubmit={this.addNewBook}>
                    <Grid container xs={10} className="newBook">
                        <Grid item xs={4} className="GridItTextCenter">
                            <TextField id="image" rows="10" multiline label="Image" margin="dense" variant="outlined" value={this.state.newBook.image} onChange={this.handleNewChange('image')} />
                        </Grid>
                        <Grid item xs={8} className="GridItTextCenter">
                            <TextField id="title" label="Title" margin="dense" variant="outlined" value={this.state.newBook.title} onChange={this.handleNewChange('title')} />
                            <TextField id="author" label="Author" margin="dense" variant="outlined" value={this.state.newBook.author} onChange={this.handleNewChange('author')} />
                            <TextField id="level" label="Level" margin="dense" variant="outlined" value={this.state.newBook.level} onChange={this.handleNewChange('level')} />
                            <TextField id="grade" label="Grade" margin="dense" variant="outlined" value={this.state.newBook.grade} onChange={this.handleNewChange('grade')} />
                            <TextField rows="3" label="Summary" multiline id="summary" variant="outlined" type='type' value={this.state.newBook.summary} onChange={this.handleNewChange('summary')} />
                        </Grid>
                        <Grid item xs={12} className="GridItTextCenter">
                            <TextField id="library_url" fullWidth label="Library Link" margin="dense" variant="outlined" value={this.state.newBook.library_url} onChange={this.handleNewChange('library_url')} />
                        </Grid>
                        <br />
                        <Grid item xs={12} className="GridItTextCenter">
                            <Button type='submit' value='Add New Book' style={{ width: "24vw" }} variant="contained" color="inherent">Submit New Book</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }


}

const mapStateToProps = reduxState => ({
    reduxState,
    user: reduxState.user,
});

export default connect(mapStateToProps)(NewBook);