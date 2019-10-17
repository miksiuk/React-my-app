import React, { Component } from 'react';
import Loggedin from './Body/Loggedin';
import Loggedout from './Body/Loggedout';
import Registration from './Body/Registration';
import AboutUs from './Body/AboutUs';
import { connect } from 'react-redux';
import Users from './Body/Users';
import { Route, Switch } from 'react-router-dom'
import Error404 from './Body/Error404'


class Body extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Loggedout} />
          <Route path='/registration' exact component={Registration} />
          <Route path='/about' exact component={AboutUs} />
          <Route path='/users' exact component={Users} />
          <Route path='/account' exact component={Loggedin} />
          <Route component={Error404} />
        </Switch>
        {/* {this.props.page === 'registration' ? <Registration /> :
          this.props.page === 'about' ? <AboutUs /> :
            this.props.page === 'users' ? <Users /> :
              this.props.mode === true ? <Loggedin /> :
                <Loggedout />} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
  mode: state.mode
})

export default connect(mapStateToProps)(Body);