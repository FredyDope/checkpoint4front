import React from 'react'
import './addmovie.css'
import { Link } from "@reach/router"
import {TextField,
		Button,
		WithStyles,
		} from '@material-ui/core'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddMovieForm extends React.Component {
	constructor() {
		super()
		this.state = {
			Titre: '',
  			Sortie: '',
  			Genre: '',
  			Synopsys: '',
  			Affiche:'',
		}
	}

	handleChange = e => {
	    const { name } = e.target
	    let value = e.target.value
    	if (name === 'Genre') {
      		value = Number(value)
    	}

    	return this.setState({ movie: { ...this.state.movie, [name]: value } })
  	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state)
		this.setState ({
			Titre: '',
  			Sortie: '',
  			Genre: '',
  			Synopsys: '',
  			Affiche:'',
		})
		
		fetch("/movie/addmovie", { method: 'POST',
		      	headers: new Headers({'Content-Type':  'application/json'
				}),
      			body:  JSON.stringify(this.state),
	    })
			    .then(res => res.json())
			    .then(
			      res  =>  this.setState({"flash":  res.flash}),
			      err  =>  this.setState({"flash":  err.flash})
	    )
	}

	 	render() {
  		const movie = this.state.movie
    	return(	 <div className="formulaire">
	    			<div>
		    			<form onSubmit={this.handleSubmit}>
			    			<TextField style={{width:'90%'}}
			    				label="Titre"
			    				value = {this.state.Titre} 
			    				placeholder="Titre"
			    				type="text"
			    				onChange={e => this.setState({
								Titre: e.target.value})}		
			    			/>
			    			<TextField style={{width:'90%'}}
			    				value = {this.state.Sortie}
			    				onChange={e => this.setState({
								Sortie: e.target.value})} 
						        type="date"
						      />
			    			 <Select style={{width:'90%'}}
			    			 	label="Style"
						        value = {this.state.Genre} 
					         	onChange={e => this.setState({
								 Genre: e.target.value})}>
						        >
						          <MenuItem value="lovestory"> Love Story </MenuItem>
						          <MenuItem value="thriller"> Thriller </MenuItem>
						          <MenuItem value="comedie"> Comedie </MenuItem>
						          <MenuItem value="aventure"> Aventure </MenuItem>
						          <MenuItem value="action"> Action </MenuItem>
						          <MenuItem value="western"> Western </MenuItem>
						        </Select>
			    			<TextField style={{width:'90%'}}
						        id="multiline-static"
						        label="Synopsys"
						        multiline
						        rows="4"
						        margin="normal"
						        value = {this.state.Synopsys} 
			    				placeholder="Synopsys"
			    				type="text" 
			    				onChange={e => this.setState({
								Synopsys: e.target.value})}
						        />
						    <TextField style={{width:'90%'}}
								id="picture"
								label="Affiche du film"
								name="Affiche"
								type="url"
								value={this.state.Affiche}
								onChange={e => this.setState({
								Affiche: e.target.value})}
								placeholder="Affiche"
							/>
							<br />
				    		<div>
				    			<Button
				    			style={{padding: 'auto'}}
				    			variant="raised"
				    			color="primary"
				    			type="submit"
				    			>
				    			Send
				    			</Button>
			    			</div>
			    			<Link to="/home">
	            				<Button 
		            			cstyle={{padding: 'auto'}}
							    variant="raised"
								color="primary" 
								>
								Cancel
								</Button>
          					</Link>  
		    			</form>
    				</div>
    			</div>
    	)
  	}
}

export default AddMovieForm