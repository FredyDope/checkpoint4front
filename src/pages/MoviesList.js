import React from 'react'
import Cards from '../components/Cards'
import { Link } from  "@reach/router"

import {
  withStyles,
  Typography,
  Button,
} from '@material-ui/core'

import { Add as AddIcon } from '@material-ui/icons'

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: 3 * theme.spacing.unit,
    right: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      bottom: 2 * theme.spacing.unit,
      right: 2 * theme.spacing.unit,
    },
  },
});

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
    const { classes } = this.props;

  	console.log ( 'render', { state: this.state} )
    
    const movieElements = this.state.movies.map(movie =>
    	<Cards key = {movie.id} movie = {movie} />
    )

    return (

    <div>
          <Typography variant="display1">Liste de Films</Typography>
          <div>
            {movieElements}
          </div>
          <Link to="/formulaire" >
            <Button
            position = 'absolute'
            variant="fab"
            color="secondary"
            aria-label="add"
            className={classes.fab}
          >
          <AddIcon />
          </Button>
          </Link>
    </div>
    )
  }
}
export default withStyles(styles)(MoviesList);
