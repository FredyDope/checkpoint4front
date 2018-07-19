import React, { Component } from 'react'
import { Link } from "@reach/router"


class AddMovieForm extends Component {
  render() {
    return (
      <div>
       <h1>----FORMULAIRE----</h1>
        <Link to="home">
          <button>retour home</button></Link>
      </div>
    );
  }
}

export default AddMovieForm