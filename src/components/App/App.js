import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';

import BookDetails from '../BookDetails/BookDetails.js';
import Edit from '../Edit/Edit.js';
import OrganizedBooks from '../OrganizedBooks/OrganizedBooks'
import WelcomePage from '../WelcomePage/WelcomePage';
import NewBook from '../NewBook/NewBook';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
    this.props.dispatch({ type: 'FETCH_BOOKS' })
  }

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/welcome" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <Route
              exact
              path="/welcome"
              component={WelcomePage}
            />
            <Route
              exact
              path="/organizedbooks"
              component={OrganizedBooks}
            />
            <Route
              exact
              path="/edit"
              component={Edit}
            />
             <Route
              exact
              path="/bookdetails/:id"
              component={BookDetails}
            />
            <Route
              exact
              path="/newbook"
              component={NewBook}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />

            <ProtectedRoute 
            exact
            path="/welcomeadmin"
            component={WelcomePage}/>
        
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
