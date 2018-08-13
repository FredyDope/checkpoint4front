import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import MoviesList from './MoviesList'


class Home extends React.Component {
  render() {
    return (
      <div>
      <MoviesList path="/home" />
      </div>
    )
  }
}

export default Home;