import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';



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
                <AppBar position="static">
                <h2>Guided Reading Levels</h2>
                </AppBar>
                <Grid container>
                
                {this.props.reduxState.readingLevelsReducer.map(level => {
                    return ( 
                        <Button variant="contained" color="inherent" padding="10dp" id = {level.level} onClick = {() => this.onClick(level.level)}>
                            level {level.level}
                        </Button>
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