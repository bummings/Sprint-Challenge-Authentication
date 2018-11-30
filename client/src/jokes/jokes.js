import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  state = {
    jokes: []
  };
  render() {
    return (
      <div>
        <h1>Jokes</h1>
        <ul>
          {this.state.jokes.map(joke => (
            <h2 key={joke.id} className='users__user'>
              {joke.setup} {joke.punchline}
            </h2>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    const endpoint = 'http://localhost:3300/api/jokes';
    const options = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get(endpoint, options)
      .then(res => {
        console.log(res.data);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log('error occured: ', err);
      });
  }
}

export default Jokes;
