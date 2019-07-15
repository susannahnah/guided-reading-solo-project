import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import AppBar from '@material-ui/core/Appbar';
import './Nav.css';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

class Nav extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state, [side]: open });
  };


  fullList = side => (
    <div
      styles={{ width: 250 }}
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <Link className="nav-link blue" to="/welcome">
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link className="nav-link blue" to="/about">
            About
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
        </ListItem>
        <ListItem>
          <Link className="nav-link blue" to="/welcomeadmin">
             {/* Show this link if they are logged in or not,
            //       but call this link 'Home' if they are logged in,
            //       and call this link 'Login / Register' if they are not */}
            Admin
          </Link>
        </ListItem>
        <ListItem>
        <LogOutButton className="nav-link blue" />
        </ListItem>
      </List>

      {/* {['Admin', 'Log Out'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} /> */}

    </div>
  )

  // // const Nav = (props) => (
  // //   <div className="nav">
  // //     <Link to="/home">
  //       <AppBar>
  //         <h2 className="nav-title">Guided Reading Project</h2>
  //       </AppBar>
  //     </Link>
  //     <div className="nav-right">
  //       <Link className="nav-link" to="/home">
  //         {/* Show this link if they are logged in or not,
  //       but call this link 'Home' if they are logged in,
  //       and call this link 'Login / Register' if they are not */}
  //         {props.user.id ? 'Home' : 'Login / Register'}
  //       </Link>
  //       {/* Show the link to the info page and the logout button if the user is logged in */}
  //       {props.user.id && (
  //         <>
  //           <Link className="nav-link" to="/info">
  //             Info Page
  //         </Link>
  //           <LogOutButton className="nav-link" />
  //         </>
  //       )}
  //       {/* Always show this link since the about page is not protected */}
  //       <Link className="nav-link" to="/about">
  //         About
  //     </Link>
  //     </div>
  //   </div>
  // );

  render() {
    return (
      <div className='nav'>
        <Grid container alignItems="center">
          <Grid item xs={2}><IconButton onClick={this.toggleDrawer('left', true)}>
            <SvgIcon className="menu-button">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </SvgIcon>
          </IconButton></Grid>
          <Grid item xs={10}><h2 className="title">Reading Path</h2></Grid>
        </Grid>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          {this.fullList('left')}
        </Drawer>
    </div>
    
  );
  }
};
// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
