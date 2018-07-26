import React, { Component } from 'react'
import { Link } from '@reach/router'
import Movie from './Movie'
import axios from  'axios'

class DeleteMovie extends Component {
	// state = {
	// 	onemovie : null
	// }

  // handleDelete 
	
  componentDidMount() {
		const id = this.props.id
		console.log('props DELETE', id)
    axios.delete(`http://localhost:3030/movie/lessmovie/${id}`)
  }
  render() {

  	// const movieElements = this.state.onemovie.map(movie =>
   //  	<Movie key = {movie.id} movie = {movie} />
   //  )
    
    return (
      <div>

      {/*button onClick */}
      </div>
    )
  }
}

export default DeleteMovie;