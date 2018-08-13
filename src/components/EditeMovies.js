import React from 'react'
import axios from 'axios'
import { Link } from "@reach/router"

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

const styles = (theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 500
	},
	menu: {
		width: 200
	},
	button: {
		margin: theme.spacing.unit
	},
	input: {
		display: 'none'
	}
})
;(movie) => JSON.stringify(movie.Titre)
;(movie) => JSON.stringify(movie.Sortie)
;(movie) => JSON.stringify(movie.Genre)
;(movie) => JSON.stringify(movie.Synopsys)
;(movie) => JSON.stringify(movie.Affiche)

class EditMovies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movie: null,
			Titre: '',
  			Sortie: '',
  			Genre: '',
  			Synopsys: '',
  			Affiche:'',
  			name:'',

			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
	}

	handleChange = (e) => {
		const movie = {
			...this.state.movie,
			[e.target.name]: e.target.value
		}
		this.setState({ movie })
	}

	componentDidMount() {
		const id = this.props.id
		console.log('props', id)
		axios
			.get(`http://localhost:3030/movie/movielist/${id}`)
			.then((res) => {
				this.setState({ movie: res.data })
				console.log(this.state.movie)
				
			})
			
	}

	onChange = (e) => {
    const state = this.state.movie
    state[e.target.name] = e.target.value;
    this.setState({movie:state});
  }

	handlSubmit = (e) => {

		const id = this.props.id
		const movie = this.state.movie
		console.log(id)
		console.log(movie)

		axios.put(`http://localhost:3030/movie/updatemovie/${id}`, movie)
	}

	render() {
		const { classes } = this.props
		if (this.state.movie === null) {
			return <p>Loading...</p>
		}

		return (
			<div>
				<h1>Modifier votre affiche de film</h1>
				<form className={classes.container} className="formulaire">
					<div className="containerprincipal">
						<div className="container1">
							<TextField
								label="Titre"
								name="Titre"
								type="text"
								value={this.state.movie.Titre}
								className={classes.textField}
								onChange={(e) => console.log(e) || this.handleChange(e)}
								placeholder="Titre"
							/>
							<br />

							
							<br />
							<TextField
								id="date"
								label="Date de sortie"
								type="date"
								name="Sortie"
								defaultValue="2017-05-24"
								className={classes.textField}
								value={this.state.movie.Sortie}
								onChange={this.handleChange}
								placeholder="Sortie"
							/>
						</div>
						<div className="container2">
							<TextField
								id="multiline-static"
								label="Genre"
								name="Genre"
								type="text"
								value={this.state.movie.Genre}
								className={classes.textField}
								onChange={this.handleChange}
								placeholder="Genre"
							/>
							<br />
								<TextField
								id="multiline-static"
								label="description"
								name="Synopsys"
								type="text"
								multiline
								rows="2"
								value={this.state.movie.Synopsys}
								className={classes.textField}
								onChange={this.handleChange}
								placeholder="Synopsys"
							/>
							<br />
							<TextField
								id="picture"
								label="picture"
								name="Affiche"
								type="url"
								className={classes.textField}
								value={this.state.movie.Affiche}
								onChange={this.handleChange}
								placeholder="Affiche"
							/>
							<br />
						</div>
					</div>
					<div className="addbutton">
						<button
							onClick={this.handlSubmit}
							className="buttonform"
							style={{ padding: 'auto' }}
							variant="raised"
							color="primary"
							type="submit"
						>
							Update
						</button>
						<Link to="/home">
	            		<button 
	            			className="buttonform" 
	            			cstyle={{padding: 'auto'}}
						    variant="raised"
							color="primary" 
						>
						Cancel
						</button>
						</Link>
					</div>
				</form>
			</div>
		)
	}
}
EditMovies.propTypes = {
	classes: PropTypes.object.isRequired
}
export default withStyles(styles)(EditMovies)