import React from 'react'
import './addmovie.css'
//import { Link } from "@reach/router"

class AddMovieForm extends React.Component {
	constructor() {
		super()
		this.state = {
			Titre: '',
  			Sortie: '',
  			Genre: 1,
  			Synopsys: '',
  			Affiche:'',
		}
	}

	/*handleClick = () => {
    	this.setState({ open: true });
  	};

  	handleClose = (event, reason) => {
    	if (reason === 'clickaway') {
      	return;
    }

    this.setState({ open: false });
  };*/

	handlSubmit = (event) => {
		event.preventDefault()
		console.log(this.state)
		this.setState ({
			Titre: '',
  			Sortie: '',
  			Genre: '',
  			Synopsys: '',
  			Affiche:'',
		})
		
		fetch("/movie/addmovie", 
		{
		      method: 'POST',
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
  		const { classes } = this.props
    	return(	 <div className="formulaire">
	    			<div>
		    			<form className="forminput" onSubmit={this.handlSubmit}>
			    			<input className="article-form-input"
			    				value = {this.state.Titre} 
			    				placeholder="Titre"
			    				type="text"
			    				onChange={event => this.setState({
								Titre: event.target.value})}		
			    			/>
			    			
			    			<label >Date de sortie :
			    			<input className="article-form-input"
			    				value = {this.state.Sortie} 
			    				placeholder="Sortie"
			    				type="date" 
			    				onChange={event => this.setState({
								Sortie: event.target.value})}
			    			/>
			    			</label>

			    			<label >Catégorie :</label>
								<select className="genreselect" id="Genre" name='Genre' value={this.state.Genre} onChange={event => this.setState({
								Genre: event.target.value})}>
									<option value={1}>Policier</option>
									<option value={2}>Comique</option>
									<option value={3}>Science Fiction</option>
									<option value={4}>Aventure</option>
								</select>
							

			    			<textarea className="resume"
			    				value = {this.state.Synopsys} 
			    				placeholder="Synopsys"
			    				type="text" 
			    				onChange={event => this.setState({
								Synopsys: event.target.value})}
			    			/>
			    			<input className="article-form-input"
			    				value = {this.state.Affiche} 
			    				placeholder="Affiche"
			    				type="URL" 
			    				onChange={event => this.setState({
								Affiche: event.target.value})}
			    			/>
				    		<div>
				    			<button className="buttonform"
				    				style={{padding: 'auto'}}
				    				onClick={this.handleClick}
				    				variant="raised"
				    				color="primary"
				    				type="submit"
				    			>
				    			send
				    			</button>
			    			</div>
		    			</form>
    				</div>
    			</div>
    	)
  	}
}

export default AddMovieForm