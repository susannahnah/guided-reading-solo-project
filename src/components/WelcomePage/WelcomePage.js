import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import './WelcomePage.css';



class WelcomePage extends Component {

    onClick = (level) => {
        console.log('this works?', level);
        
        this.props.history.push({
            pathname: '/organizedbooks',
            state: {
                  level: level
             }
       })
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_LEVELS',
        })
    }
    

    render() {
        return (
            <>
                <Grid container className='App' > 
                {this.props.reduxState.readingLevelsReducer.map(level => {
                    return ( 
                        <Grid item xs={12} sm={6} md={4} lg={3} className="levelButton" id= {level.level} 
                            onClick = {() => this.onClick(level.level)}>
                            Level {level.level}
                        </Grid>
                    )
                })}
                </Grid>
            </>
        )
    }
}




const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(WelcomePage);