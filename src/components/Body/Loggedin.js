import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { axios } from 'axios';

class Loggedin extends Component {

  render() {
    return (
      this.props.mode === false ? <Redirect to='/' /> :
        <div>
          User is loggined!
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.mode
})

export default connect(mapStateToProps)(Loggedin);