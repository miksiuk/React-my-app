import React, { Component } from 'react';
import Loggedin from './Body/Loggedin';
import Loggedout from './Body/Loggedout';
import Registration from './Body/Registration';
import AboutUs from './Body/AboutUs';
import { connect } from 'react-redux';
import store from '../redux/store';
import Users from './Body/Users';


class Body extends Component {

  render() {
    return (
      <div>
        {this.props.page === 'registration' ? <Registration /> :
          this.props.page === 'about' ? <AboutUs /> :
            this.props.page === 'users' ? <Users /> :
              this.props.mode === 'loggedin' ? <Loggedin /> :
                <Loggedout />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
  mode: state.mode
})

export default connect(mapStateToProps)(Body);