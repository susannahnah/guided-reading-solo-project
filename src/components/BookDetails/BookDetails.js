import React, { Component } from 'react';
import { connect } from 'react-redux';




const mapStateToProps = state => ({
    errors: state.errors,
  });
  
  export default connect(mapStateToProps)(BookDetails);
  