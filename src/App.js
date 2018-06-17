import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts'
import PostForm from './components/PostForm';

import { Provider } from 'react-redux';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to my React, Redux and Axios example</h1>
          </header>
          <p className="App-intro">
            This app using <a href="https://github.com/axios/axios">axios</a> for http client. This example based on bradtraversy <a href="https://github.com/bradtraversy/redux_crash_course">Simple implementation of Redux with React 16</a> example.
        </p>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
