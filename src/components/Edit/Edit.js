import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        id: '',
        title: '',
        author: '',
        image: '',
        level: '',
        grade: '',
        summary: '',
    }

    componentDidMount() {
        this.setState({
            id: this.props.reduxState.individualBookReducer.id,
            title: this.props.reduxState.individualBookReducer.title,
            author: this.props.reduxState.individualBookReducer.author,
            image: this.props.reduxState.individualBookReducer.image,
            level: this.props.reduxState.individualBookReducer.level,
            grade: this.props.reduxState.individualBookReducer.grade,
            summary: this.props.reduxState.individualBookReducer.summary,
        })
    };

    handleChange = (event) => {
        console.log('info changed')
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    };

    //cancel edit function
    cancelEditButton = (event) => {
        this.props.history.push('/bookdetails')
    };


    //submit edit function
    submitNewEdits = (event) => {
        console.log(this.state);
        
        event.preventDefault();
        this.props.dispatch({ type: 'EDIT_BOOK', payload: this.state })
        this.props.history.push('/welcome')
    };

    render() {
        return (
            <div>
                <h2>Edit Book Here</h2>
                <form onSubmit={this.submitNewEdits}>
                    <input id="title" type='text' value={this.state.title} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input id="author" type='text' value={this.state.author} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input id="image" type='text' value={this.state.image} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input id="level" type='text' value={this.state.level} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input id="grade" type='text' value={this.state.grade} onChange={this.handleChange} />
                    <br />
                    <br />
                    <textarea rows="10" cols="100" id="summary" type='type' value={this.state.summary} onChange={this.handleChange} />
                    <br />
                    <br />
                    <button type='Submit' value='Book Edits'>Submit Changes</button>
                    <br />
                    <br />
                    {/* <button onClick={this.cancelEditButton}>Cancel Edits</button> */}
                </form>
            </div>
        )
    }






}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Edit);
