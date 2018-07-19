import React from 'react'
import './movie.css'

const Movie = ({ movie }) => {
    return (
      <div className="row">
      	<div className="card">
      		
      			<img src={movie.Affiche} alt="affiche de blade runner"/>
      				<div className="container">
      					<h2>{movie.Titre}</h2>
      					<span>Date de sortie :{movie.Sortie}</span>
      					<p>Genre : {movie.Genre}</p>
      					<p>Synopsys : {movie.Synopsys}</p>
      				</div>
      		
      	</div> 
      </div>
    )
}

export default Movie