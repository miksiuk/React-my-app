import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';
import { Link } from 'react-router-dom'
// import Loggedout from './Header/Loggedout';
// import Loggedin from './Header/Loggedin';

class Header extends Component {

  changeMode(mode) {
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
        {this.props.mode ?
          <div className='card-header text-center'>
            <Link to='/'><button className="mr-1 btn-primary" onClick={() => this.changeMode(false)}>Logout</button></Link>
            <Link to='/users'><button className="mr-1">Users</button></Link>
            <button className="mr-1" onClick={() => this.click()}>Increment</button>
            <Link to='/about'><button>About Us</button></Link>
          </div> :
          <div className='card-header text-center'>
            <Link to='/'><button className="mr-1 btn-primary">Login</button></Link>
            <Link to='/registration'><button className="mr-1">Register</button></Link>
            <Link to='/users'><button className="mr-1">Users</button></Link>
            <button className="mr-1" onClick={() => this.click()}>Increment</button>
            <Link to='/about'><button>About Us</button></Link>
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