import React from 'react'
import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { MySnackbarContentWrapper } from './alert'
import Snackbar from '@material-ui/core/Snackbar'
import Icon from '@material-ui/core/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles'
import SelectButton from './SelectButton'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import NativeSelect from '@material-ui/core/NativeSelect'
import Input from '@material-ui/core/Input'
// core components
import GridContainer from './Grid/GridContainer.jsx'
import GridItem from './Grid/GridItem.jsx'
// import ButtonAppBar from './appbar'
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
;(recipe) => JSON.stringify(recipe.name)
;(recipe) => JSON.stringify(recipe.picture)
;(recipe) => JSON.stringify(recipe.description)
;(recipe) => JSON.stringify(recipe.ingredient)
;(recipe) => JSON.stringify(recipe.preparation)
;(recipe) => JSON.stringify(recipe.video)

class Update extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			recipe: null,
			name: '',
			categories: '',
			displaySnack: false,
			snack: { variant: 'warning', message: '' }
		}
	}
	handleSimple = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}
	handleClose = (reason) => {
		if (reason === 'clickaway') {
			return
		}

		this.setState({ displaySnack: false })
	}

	// handleChangeP = (event) => {
	// 	console.log(event.target.files)
	// 	const recipe = {
	// 		...this.state.recipe,
	// 		[event.target.name]: event.target.files
	// 	}
	// 	this.setState({ recipe })
	// }

	handleChange = (event) => {
		const recipe = {
			...this.state.recipe,
			[event.target.name]: event.target.value
		}
		this.setState({ recipe })
	}
	// handleChangeSelect = (name) => (event) => {
	// 	this.setState({ [event.target.name]: event.target.value })
	// }
	componentDidMount() {
		const { match: { params } } = this.props

		axios
			.get(`http://localhost:3030/recipe/showRecipe/${params.id}`)
			.then((response) => {
				this.setState({ recipe: response.data })
				console.log(this.state.movie)
			})
			.catch((err) => {
				console.log(' caught it!', err)
			})
	}
	handleSubmit = (event) => {
		const { match: { params } } = this.props
		const recipe = this.state.recipe

		console.log(recipe)

		axios.put(`http://localhost:3030/recipe/updateRecipe/${params.id}`, recipe).then((response) => {
			const snack = {
				variant: 'success',
				message: 'Recette modifier!'
			}
			return this.setState({ snack, displaySnack: true })
		})
	}

	render() {
		const { classes } = this.props
		if (this.state.recipe === null) {
			return <p>Loading...</p>
		}
		const youtube = <FontAwesomeIcon icon={[ 'fab', 'youtube' ]} />
		const picture = <FontAwesomeIcon icon={[ 'fab', 'instagram' ]} />

		return (
			<div>
				{/* <ButtonAppBar /> */}
				<h1>Modifier votre recette</h1>
				<form className={classes.container} className="formulaire">
					<div className="containerprincipal">
						<div className="container1">
							<TextField
								id="name"
								label="name"
								name="name"
								value={this.state.recipe.name}
								className={classes.textField}
								onChange={(e) => console.log(e) || this.handleChange(e)}
								margin="normal"
							/>
							<br />
							<br />

							<TextField
								id="picture"
								label={picture}
								name="picture"
								className={classes.textField}
								value={this.state.recipe.picture}
								onChange={this.handleChange}
								placeholder="Specifier une URL"
							/>
							<br />

							<TextField
								id="multiline-static"
								label="Ingredient"
								name="ingredient"
								multiline
								rows="7"
								value={this.state.recipe.ingredient}
								className={classes.textField}
								onChange={this.handleChange}
								margin="normal"
							/>
							<br />
							<br />


								
	
						<GridContainer>
				<GridItem xs={12} sm={6} md={5} lg={5}>
					<FormControl fullWidth className={classes.selectFormControl}>
						<InputLabel htmlFor="simple-select" className={classes.selectLabel}>
							Categorie
						</InputLabel>
						<Select
						onChange={this.handleChange}
								name="categories"
							MenuProps={{
								className: classes.selectMenu
							}}
							classes={{
								select: classes.select
							}}
							value={this.state.recipe.categories}
					
							inputProps={{
								name: 'categories',
								id: 'categories'
							}}
						>
							<MenuItem
								disabled
								classes={{
									root: classes.selectMenuItem
								}}
							>
								Multiple Select
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="Paleo"
							>
								Paleo
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="Vegetarian"
							>
								Vegetarian
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="Breakfast"
							>
								Breakfast
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="Main Meals"
							>
								Main Meals
							</MenuItem>
							<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="Healthy Dinner"
							>
								Healthy Dinner
							</MenuItem>
								<MenuItem
								classes={{
									root: classes.selectMenuItem,
									selected: classes.selectMenuItemSelected
								}}
								value="Dessert"
								

							>
							Dessert
							</MenuItem>
						</Select>
					</FormControl>
				</GridItem>
			</GridContainer>
	
			
	
							{/* <Button
								id="picture"
								containerElement="picture" // <-- Just add me!
								label="picture"
								name="picture"
								onChange={(e) => console.log(e) || this.handleChangeP(e)}
								onChange={this.handleChange}
							>
								<TextField
									accept="image/*"
									type="file"
									id="picture"
									label="picture"
									name="picture"
									onChange={(e) => console.log(e) || this.handleChangeP(e)}
									onChange={this.handleChangeP}
								/>
							</Button> */}
						</div>

						<div className="container2">
							<TextField
								id="multiline-static"
								label="description"
								name="description"
								multiline
								rows="2"
								value={this.state.recipe.description}
								className={classes.textField}
								onChange={this.handleChange}
								margin="normal"
							/>
							<br />
							<TextField
								id="video"
								label={youtube}
								name="video"
								className={classes.textField}
								value={this.state.recipe.video}
								placeholder="Specifier une URL"
								onChange={this.handleChange}
							/>

							<br />
							<TextField
								id="multiline-static"
								label="Preparation"
								name="preparation"
								multiline
								rows="9"
								value={this.state.recipe.preparation}
								className={classes.textField}
								onChange={this.handleChange}
								margin="normal"
							/>
						</div>
					</div>

					<div className="addbutton">
						<Button
							onClick={this.handleSubmit}
							variant="fab"
							color="primary"
							aria-label="Add"
							style={{ backgroundColor: '#DB1C1C' }}
						>
							<Icon className={classes.rightIcon}>send</Icon>
						</Button>
					</div>
					<div>
						<Snackbar
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={this.state.displaySnack}
							autoHideDuration={3}
						>
							<MySnackbarContentWrapper {...this.state.snack} onClose={this.handleClose} />
						</Snackbar>
					</div>
				</form>
			</div>
		)
	}
}

Update.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Update)