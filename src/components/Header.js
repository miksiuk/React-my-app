import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';
// import Loggedout from './Header/Loggedout';
// import Loggedin from './Header/Loggedin';

class Header extends Component {

  changePage(page, mode) {
    store.dispatch({
      type: 'PAGE',
      payload: page,
    });
    if (mode !== undefined) store.dispatch({
      type: 'MODE',
      payload: mode,
    })
  }

  click() {
    store.dispatch({
      type: 'CLICK',
    })
  }

  render() {
    return (
      <div>
        {this.props.mode === 'loggedin' ?
          <div className='card-header text-center'>
            <button className="mr-1 btn-primary" onClick={() => this.changePage('loggedout', 'loggedout')}>Logout</button>
            <button className="mr-1" onClick={() => this.changePage('users')}>Users</button>
            <button className="mr-1" onClick={() => this.click()}>Increment</button>
            <button onClick={() => this.changePage('about')}>About Us</button>
          </div> :
          <div className='card-header text-center'>
            <button className="mr-1 btn-primary" onClick={() => this.changePage('loggedin', 'loggedin')}>Login</button>
            <button className="mr-1" onClick={() => this.changePage('registration')}>Register</button>
            <button className="mr-1" onClick={() => this.changePage('users')}>Users</button>
            <button className="mr-1" onClick={() => this.click()}>Increment</button>
            <button onClick={() => this.changePage('about')}>About Us</button>
          </div>
        }
      </div >
    );
  }
}

const mapStateToProps = state => ({
  mode: state.mode
})

export default connect(mapStateToProps)(Header);