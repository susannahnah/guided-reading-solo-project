import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    state = {
        title: '',
        author: '',
        image: '',
        level: '', 
        grade: '',
        summary: '',
    }

    componentDidMount() {
        this.setState()
    };

    handleChange = (event) => {
        console.log('info changed')
        this.setState({
            ...this.state,
        [event.target.id]: event.target.value
        })
    };

//cancel edit function
    cancelEditButton = () => {
        this.props.history.push('/details')
    };

    
//submit edit function
    submitNewEdits = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'EDIT_BOOK', payload: {...this.state, id:this.props.reduxState.individualBookReducer}})
        this.props.history.push('/bookdetails')
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
                    <button onClick={this.cancelEditButton}>Cancel Edits</button>
                </form>
             </div>
        )
    }






}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Edit);
