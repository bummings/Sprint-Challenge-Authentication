import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';

import SignIn from './auth/signUp';
import SignUp from './auth/signUp';
import Jokes from './jokes/jokes';

const Home = props => {
  return (
    <div>
      <h1>DAD JOKES</h1>
      <p>Please login for some killer dad jokes</p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <nav className='nav'>
            <NavLink className='nav__item' to='/' exact>
              Home
            </NavLink>
            <NavLink className='nav__item' to='/jokes'>
              Jokes
            </NavLink>
            <NavLink className='nav__item' to='/signin'>
              Sign In
            </NavLink>
            <NavLink className='nav__item' to='/signup'>
              Sign Up
            </NavLink>
          </nav>
          <main>
            <Route path='/' component={Home} exact />
            <Route path='/jokes' component={Jokes} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </main>
        </header>
      </div>
    );
  }
}

export default App;
