import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Registration extends Component {

  render() {
    return (
      this.props.mode === true ? <Redirect to='/account' /> :
        <div>
          Registration
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.mode
})

export default connect(mapStateToProps)(Registration);