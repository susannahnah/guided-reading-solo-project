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

    render() {
        return (
            <>
                <AppBar position="static">
                <h2>Guided Reading Levels</h2>
                </AppBar>
                <Grid container>
                <Button variant="contained" color="inherent" padding="10dp" id='A' onClick = {()=>this.onClick('A')}>
                Level A
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='B' onClick = {this.onClick}>
                Level B
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='C' onClick = {()=>this.onClick('C')}>
                Level C
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='D' onClick = {()=>this.onClick('D')}>
                Level D
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='E' onClick = {this.onClick}>
                Level E
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='F' onClick = {this.onClick}>
                Level F
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='G' onClick = {this.onClick}>
                Level G
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='H' onClick = {this.onClick}>
                Level H
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='I' onClick = {this.onClick}>
                Level I
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='J' onClick = {()=>this.onClick('J')}>
                Level J
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='K' onClick = {()=>this.onClick('K')}>
                Level K
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='L' onClick = {this.onClick}>
                Level L
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='M' onClick = {()=>this.onClick('M')}>
                Level M
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='N' onClick = {this.onClick}>
                Level N
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='O' onClick = {this.onClick}>
                Level O
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='P' onClick = {this.onClick}>
                Level P
                </Button>
                <Button variant="contained" color="inherent" padding="10dp" id='Q' onClick = {this.onClick}>
                Level Q
                </Button><Button variant="contained" color="inherent" padding="10dp" id='R' onClick = {this.onClick}>
                Level R
                </Button>

                </Grid>
            </>
        )
    }
}




const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(WelcomePage);