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

  click() {
    store.dispatch({
      type: 'CLICK',
    })
  }

  render() {
    return (
      <div></div>
    );
  }
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Header);