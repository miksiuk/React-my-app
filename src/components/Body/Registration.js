import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { Redirect } from 'react-router-dom';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      firstName: '',
      lastName: '',
      error: false,
      errorText: ''
    };
  }

  register() {
    let er = false;
    this.props.users.forEach(el => {
      if (el.login === this.state.login && this.state.login !== '') {
        er = true;
      }
    });

    if (er === true) {
      this.setState({
        error: true,
        errorText: "User already exist"
      });
    } else {
      // if (this.state.error === false) {
      let users = this.props.users;
      users.push({
        login: this.state.login,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })

      store.dispatch(
        {
          type: 'MODE',
          payload: true,
        },
        {
          type: 'REGISTER',
          payload: users
        })
    }
  }

  render() {
    return (
      this.props.mode === true ? <Redirect to='/account' /> :
        <div>
          Registration
           <div className="text-center">
            <input placeholder="username" className="form-control m-2" onChange={(e) => this.setState({ login: e.target.value })}></input>
            <input placeholder="password" type="password" className="form-control m-2" onChange={(e) => this.setState({ password: e.target.value })}></input>
            <input placeholder="first name" className="form-control m-2" onChange={(e) => this.setState({ firstName: e.target.value })}></input>
            <input placeholder="last name" className="form-control m-2" onChange={(e) => this.setState({ lastName: e.target.value })}></input>
            <button className="mr-1 btn-primary m-2" onClick={() => this.register()}>Register me</button>
            {this.state.error === true && <p>{this.state.errorText}</p>}
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.mode,
  users: state.users
})

export default connect(mapStateToProps)(Registration);