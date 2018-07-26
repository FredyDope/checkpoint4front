import React, { Component } from 'react'
import './App.css'
import { Router } from '@reach/router'

import Header from './components/Header'
import Navbar from './components/Navbar'
import MoviesList from './components/MoviesList'
import AddMovieForm from './components/AddMovieForm'
import MovieId from './components/MovieId'
import DeleteMovie from './components/DeleteMovie'
import EditMovie from './components/EditMovie'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Navbar />
          <Router>
            <EditMovie path="/update/:id" />
            <DeleteMovie path="/delete/:id" />
            <MovieId path="/movie/:id" />
            <AddMovieForm path="/formulaire" />
            <MoviesList path="/home" />
          </Router>
      </div>
    )
  }
}

export default App
