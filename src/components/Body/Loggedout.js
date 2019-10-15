import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { Redirect } from 'react-router-dom';

class Loggedout extends Component {

  changeMode(mode) {
    if (mode !== undefined) store.dispatch({
      type: 'MODE',
      payload: mode,
    })
  }

  render() {
    return (
      this.props.mode === true ? <Redirect to='/account' /> :
        <div>
          Please register or login!
        <div className="text-center"><button className="mr-1 btn-primary" onClick={() => this.changeMode(true)}>Login</button></div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.mode
})

export default connect(mapStateToProps)(Loggedout);