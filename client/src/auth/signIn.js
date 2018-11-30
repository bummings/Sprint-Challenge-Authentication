import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  };

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <div className='form__input'>
            <input
              name='username'
              value={this.state.username}
              onChange={this.handleInputChange}
              type='text'
              placeholder='username'
              className='form__input'
            />
          </div>
          <div className='form__input'>
            <input
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              type='password'
              placeholder='password'
              className='form__input'
            />
          </div>
          <div>
            <button className='form__btn' type='submit'>
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:3300/api/login';

    console.log(this.state);
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('jwt', res.data.token);
      })
      .catch(err => {
        console.log('big time error bruh', err);
      });
  };
}

export default SignIn;
