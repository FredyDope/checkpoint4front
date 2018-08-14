import React, { Component } from 'react'
import Cards from './Cards'

class MovieId extends Component {
	state = {
		onemovie : null
	}

	componentDidMount() {
		const id = this.props.id
		console.log('props', id)

		fetch(`http://localhost:3030/movie/movielist/${id}`)
			.then(res => res.json())
			.then(datas => this.setState( { onemovie: datas }))
	}
  render() {
  	console.log ( 'render', { state: this.state} )
  		if(this.state.onemovie === null) {
  		return <p>Loading...</p>
  	}
  	const movieElements = this.state.onemovie.map(movie =>
    	<Cards 
      key = {movie.id} 
      movie = {movie} 
      />
    )
    return (
      <div>
       <div>{movieElements}</div>
      </div>
    )
  }
}

export default MovieId;