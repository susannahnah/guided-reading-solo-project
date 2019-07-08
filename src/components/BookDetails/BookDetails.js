import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'


class BookDetails extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'SELECT_BOOK',
            payload: this.props.match.params.id,
        })
    };
    
    // handleBackClick = () => {
    //     this.props.history.push('/')
    // };

    handleEditClick = () => {
        this.props.history.push('/edit')
    };

    render() {
        return (
            <>
               <h1>
                {this.props.reduxState.individualBookReducer.title}
                </h1>
                <br />
                {this.props.reduxState.individualBookReducer.author}
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

                <br />
                <br />
                <br />           
               {JSON.stringify(this.props.reduxState.individualBookReducer, null, 2 )}

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
  