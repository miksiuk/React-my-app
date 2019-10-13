import React, { Component } from 'react';

class Loggedin extends Component {

  render() {
    return (
      <div className='card-header text-center'>
        <button className="mr-1" onClick={() => this.changePage('login')}>Login</button>
        <button className="mr-1" onClick={() => this.changePage('registration')}>Register</button>
        <button className="mr-1" onClick={() => this.changePage('users')}>Users</button>
        <button className="mr-1" onClick={() => this.click()}>Increment</button>
        <button onClick={() => this.changePage('about')}>About Us</button>
      </div>
    );
  }
}

export default Loggedin;