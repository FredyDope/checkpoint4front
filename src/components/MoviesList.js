import React from 'react'
import Movie from './Movie'

class MoviesList extends React.Component {
	state = {
		movies : []
	}

	componentDidMount() {
		fetch(`http://localhost:3030/movie/movielist`)
			.then(res => res.json())
			.then(datas => this.setState( { movies: datas }))
	}

  render() {
  	console.log ( 'render', { state: this.state} )
    
    const movieElements = this.state.movies.map(movie =>
    	<Movie movie= {movie} />
    )
    return (
      <div className="App">
          <h1 className="App-title">Movies List</h1>
          <div>{movieElements}</div>       
      </div>
    )
  }
}

export default MoviesList