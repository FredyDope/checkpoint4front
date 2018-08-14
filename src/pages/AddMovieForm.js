import React from 'react'
import './addmovie.css'
import { Link } from "@reach/router"

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

	handlSubmit = (e) => {
		e.preventDefault()
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
  		const movie = this.state.movie
    	return(	 <div className="formulaire">
	    			<div>
		    			<form className="forminput" onSubmit={this.handlSubmit}>
			    			<input className="article-form-input"
			    				value = {this.state.Titre} 
			    				placeholder="Titre"
			    				type="text"
			    				onChange={e => this.setState({
								Titre: e.target.value})}		
			    			/>
			    			
			    			<label >Date de sortie :
			    			<input className="article-form-input"
			    				value = {this.state.Sortie} 
			    				placeholder="Sortie"
			    				type="date" 
			    				onChange={e => this.setState({
								Sortie: e.target.value})}
			    			/>
			    			</label>

			    			
			    			{/*<input className="article-form-input"
			    						    				value = {this.state.Genre} 
			    						    				placeholder="Genre"
			    						    				type="text"
			    						    				onChange={e => this.setState({
			    											Genre: e.target.value})}		
			    						    			/>*/}
			    			<label>
					          Pick your favorite flavor:
					         <select className="article-form-input"
					         	value = {this.state.Genre} 
					         	onChange={e => this.setState({
								Genre: e.target.value})}>
					            <option value="grapefruit">Grapefruit</option>
					            <option value="lime">Lime</option>
					            <option value="coconut">Coconut</option>
					            <option value="mango">Mango</option>
					          </select>
					        </label>

			    			<textarea className="resume"
			    				value = {this.state.Synopsys} 
			    				placeholder="Synopsys"
			    				type="text" 
			    				onChange={e => this.setState({
								Synopsys: e.target.value})}
			    			/>
			    			<input className="article-form-input"
			    				value = {this.state.Affiche} 
			    				placeholder="Affiche"
			    				type="URL" 
			    				onChange={e => this.setState({
								Affiche: e.target.value})}
			    			/>
				    		<div>
				    			<button 
				    				className="buttonform"
				    				style={{padding: 'auto'}}
				    				onClick={this.handleClick}
				    				variant="raised"
				    				color="primary"
				    				type="submit"
				    			>
				    			Send
				    			</button>
			    			</div>
			    			<Link to="/home">
	            				<button className="buttonform" 
	            						cstyle={{padding: 'auto'}}
						    			variant="raised"
										color="primary" 
								>
								Cancel
								</button>
          					</Link>  
		    			</form>
    				</div>
    			</div>
    	)
  	}
}

export default AddMovieForm