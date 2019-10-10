import React, { Component } from 'react';
import Login from './Body/Login';
import Registration from './Body/Registration';
import AboutUs from './Body/AboutUs';
import { connect } from 'react-redux';
import store from '../redux/store';


class Body extends Component {

  render() {
    return (
      <div>
        {this.props.page === 'registration' ? <Registration /> :
          this.props.page === 'about' ? <AboutUs /> :
            <Login />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page
})

export default connect(mapStateToProps)(Body);