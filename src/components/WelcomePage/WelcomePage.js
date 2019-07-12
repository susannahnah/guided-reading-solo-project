import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import './WelcomePage.css';
import Button from '@material-ui/core/Button';



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
                        <Grid item xs={12} sm={6} md={4} lg={3} id= {level.level} 
                            onClick = {() => this.onClick(level.level)}>
                            <div className="levelButton"><h4>Level</h4><h2>{level.level}</h2></div>
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