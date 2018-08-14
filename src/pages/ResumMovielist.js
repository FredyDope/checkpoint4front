import React from 'react';
import ResumMovie from '../components/ResumMovie'

class ResumMovielist extends React.Component {
	
	state = {
      movies: []
  }
  
  //fetch du json depuis l'url
	  componentDidMount() {
    fetch(`http://localhost:3030/movie/movielist`)
      .then(res => res.json())
      .then(datas => this.setState( { movies: datas }))
  }
 
	render() {
     // log state on each render
     console.log('render', { state: this.state })
 
     const movieless = this.state.movies.map(movie =>
      <ResumMovie key={movie.id}  Affiche={movie.Affiche} />
     )
 
     return (
       <div> 		
         	<div>
          {movieless}
          </div>
       </div>
     )
   }
 }
 export default ResumMovielist

