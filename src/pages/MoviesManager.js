import React from 'react';
import MoviesList from './MoviesList'

class MoviesManager extends React.Component {
  render() {
    return (
      <div>
      <MoviesList path="/moviesmanager" />
      </div>
    )
  }
}

export default MoviesManager;