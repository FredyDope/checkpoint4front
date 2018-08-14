import React from 'react';
import ResumMovielist from './ResumMovielist'


class Home extends React.Component {
  render() {
    return (
      <div>
      <ResumMovielist path="/home" />
      </div>
    )
  }
}

export default Home;