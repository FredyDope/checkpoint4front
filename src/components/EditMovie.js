import React, { Component } from 'react'
import { Link } from '@reach/router'
import Movie from './Movie'
import axios from  'axios'

class EditMovie extends Component {
	
  componentDidMount() {
		const id = this.props.id
		console.log('props PUT', id)
    axios.get(`http://localhost:3030/movie/updatemovie/${id}`)
  }
  render() {
    
    
    return (
      <div>
      
      </div>
    )
  }
}

export default EditMovie;