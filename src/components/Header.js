import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';

class Header extends Component {

  changePage(page) {
    store.dispatch({
      type: 'PAGE',
      payload: page,
    })
  }

  render() {
    return (
      <div className='card-header text-center'>
        <button className="mr-1" onClick={() => this.changePage('login')}>Login</button>
        <button className="mr-1" onClick={() => this.changePage('registration')}>Register</button>
        <button onClick={() => this.changePage('about')}>About Us</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Header);