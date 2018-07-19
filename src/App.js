import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import MoviesList from './components/MoviesList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MoviesList />
      </div>
    );
  }
}

export default App;
