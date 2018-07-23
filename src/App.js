import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import MoviesList from './components/MoviesList'
import AddMovieForm from './components/AddMovieForm'
import { Router } from '@reach/router'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Navbar />
        <Router>
          <AddMovieForm path="/formulaire" />
          <MoviesList path="/home" />
        </Router>
      
        
      </div>
    )
  }
}

export default App;
