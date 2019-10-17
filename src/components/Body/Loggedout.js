import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { Redirect } from 'react-router-dom';

class Loggedout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      error: false,
      errorText: ''
    };
  }

  changeMode(mode) {
    if (this.state.login === "miks" && this.state.password === "twiks") {
      store.dispatch({
        type: 'MODE',
        payload: mode,
      })
    } else {
      this.setState({
        error: true,
        errorText: "Credentials don't match"
      })
    }
  }

  render() {
    return (
      this.props.mode === true ? <Redirect to='/account' /> :
        <div>
          Please register or login!
        <div className="text-center">
            <input placeholder="username" className="form-control m-2" onChange={(e) => this.setState({ login: e.target.value })}></input>
            <input placeholder="password" type="password" className="form-control m-2" onChange={(e) => this.setState({ password: e.target.value })}></input>
            <button className="mr-1 btn-primary m-2" onClick={() => this.changeMode(true)}>Login</button>
            {this.state.login}
            {this.state.password}
            {this.state.error === true && <p>{this.state.errorText}</p>}
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.mode
})

export default connect(mapStateToProps)(Loggedout);