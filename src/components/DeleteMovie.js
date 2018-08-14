import React, { Component } from 'react'
import axios from  'axios'

class DeleteMovie extends Component {
	
  componentDidMount() {
		const id = this.props.id
		console.log('props DELETE', id)
    axios.delete(`http://localhost:3030/movie/lessmovie/${id}`)
    .then((res)=>{
      console.log('Movie deleted!')
      window.location.replace("/moviesmanager")
    })
  }
  render() {

    return (
      <div>
      
      </div>
    )
  }
}

export default DeleteMovie;