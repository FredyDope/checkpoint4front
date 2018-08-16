import React from 'react'
import { Link } from "@reach/router"
import {TextField,
		Button,
		withStyles,
		} from '@material-ui/core'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Add } from '@material-ui/icons'


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



class AddMovieForm extends React.Component {
	
			state = {
				open:false,
				Titre: '',
	  			Sortie: '',
	  			Genre: '',
	  			Synopsys: '',
	  			Affiche:'',
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
	handleToggle = () => {
		this.setState({
			open: !this.state.open
		})
	}
	 	render() {
	 	const { open } = this.state
    	return(	
	    		<div>
	    			<Button 
	    			variant="fab"
			        color="secondary"
			        aria-label="add"
	    			onClick={this.handleToggle}>
	    			<Add /> 
	    			</Button>
	    			<Dialog
			          open={open}
			          onClose={this.handleToggle}
			          aria-labelledby="form-dialog-title"
			        >
			          <DialogTitle id="form-dialog-title">New Movie</DialogTitle>
			          <DialogContent>
			            <DialogContentText>
			             Content
			            </DialogContentText>
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
			    				type="date"
			    				onChange={e => this.setState({
								Sortie: e.target.value})} 
						      />
			    			 <Select style={{width:'90%'}}
			    			 	label="Style"
			    			 	type="text"
						        value = {this.state.Genre} 
					         	onChange={e => this.setState({
								 Genre: e.target.value})}>
						        >
						          <MenuItem value={1}> Love Story </MenuItem>
						          <MenuItem value={2}> Thriller </MenuItem>
						          <MenuItem value={3}> Comedie </MenuItem>
						          <MenuItem value={4}> Aventure </MenuItem>
						          <MenuItem value={5}> Action </MenuItem>
						          <MenuItem value={6}> Western </MenuItem>
						        </Select>
			    			
			    			<TextField style={{width:'90%'}}
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
								label="Affiche du film"
								name="Affiche"
								type="url"
								value={this.state.Affiche}
								onChange={e => this.setState({
								Affiche: e.target.value})}
								placeholder="Affiche"
							/>
							<br />
				    			
		    			</form>
			          </DialogContent>
			          <DialogActions>
			            		<Button
				    			style={{padding: 'auto'}}
				    			onClick={this.handleClick}
				    			variant="raised"
				    			color="primary"
				    			type="submit"
				    			>
				    			Send
				    			</Button>
			    			<Link to="/moviesmanager">
	            				<Button 
		            			cstyle={{padding: 'auto'}}
							    variant="raised"
								color="primary" 
								>
								Home
								</Button>
          					</Link>  
			          </DialogActions>
			        </Dialog>
    			</div>
    	)
  	}
}
export default withStyles(styles)(AddMovieForm);

