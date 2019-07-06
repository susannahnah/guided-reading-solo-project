import React, { Component } from 'react';
import { connect } from 'react-redux';





const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(WelcomePage);