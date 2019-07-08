import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewBook extends Component {
    state = {
        newBook: {
            title: '',
            author: '',
            image: '',
            level: '',
            grade: '',
            summary: '',
        }
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
                <h3>Add New Book</h3>
        
                <form onSubmit={this.addNewBook}>
                    <input id="title" type='text' value={this.state.newBook.name} onChange={this.handleNewChange('title')} />
                    <input id="author" type='text' value={this.state.newBook.kingdom} onChange={this.handleNewChange('author')} />
                    <input id="image" type='text' value={this.state.newBook.image} onChange={this.handleNewChange('image')} />
                    <input id="level" type='text' value={this.state.newBook.level} onChange={this.handleNewChange('level')} />
                    <input id="grade" type='text' value={this.state.newBook.grade} onChange={this.handleNewChange('grade')} />
                    <textarea rows="10" cols="50" id="summary" type='type' value={this.state.newBook.summary} onChange={this.handleNewChange('summary')} />
                    <input type='submit' value='Add New Book' />
                    
                </form>

                <pre>{JSON.stringify(this.state)}</pre>
            </div>
        );
    }


}

const mapStateToProps = reduxState => ({
    reduxState,
    user: reduxState.user,
});

export default connect(mapStateToProps)(NewBook);