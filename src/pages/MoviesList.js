import React from 'react'
import Movie from '../components/Movie'
import AddMovieForm from '../pages/AddMovieForm'
import { Router, Link, withRouter, Redire } from '@reach/router'

import {
  withStyles,
  Typography,
  Button,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core'

import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons'


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
    	<Movie key = {movie.id} movie = {movie} />
    )
    const id = this.props.id
    return (

      <div className="App">
            <Typography variant="display1">Liste de Films</Typography>
          <div>{movieElements}
          <div>
       <Button 
       color="inherit" 
       component={Link} 
       to={`/delete/${id}`}>Delete</Button>
       </div></div>     
      </div>
    )
  }
}

export default MoviesList