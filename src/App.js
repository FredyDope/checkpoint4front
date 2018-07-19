import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import MoviesList from './components/MoviesList'
import AddMovieForm from './components/AddMovieForm'
import { Router } from '@reach/router'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <AddMovieForm path="/formulaire" />
        </Router>
        <Header />
        <MoviesList path="/home"/>
      </div>
    )
  }
}

export default App;
