import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie:null,
      name:""
    };
  }

  componentDidMount() {
    const id = this.props.id
    console.log('props', id)

    fetch(`http://localhost:3030/movie/movielist/${id}`)
      .then(res => res.json())
      .then(datas => this.setState( { movie: datas }))
  }

  onChange = (e) => {
    const state = this.state.movie
    state[e.target.name] = e.target.value;
    this.setState({movie:state});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.id
    const movie = this.state.movie
    console.log(id)
    console.log(movie)

    axios
      .put(`http://localhost:3030/movie/updatemovie/${id}`, movie)
  }

  render() {
      console.log ( 'render', { state: this.state} )
      if(this.state.movie === null) {
      return <p>Loading...</p>
    }

    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT movie
            </h3>
          </div>
          <div className="panel-body">
          <h4><Link to={`/movielist/${this.state.movie.id}`}> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Titre:</label>
                <input type="text" className="form-control" name="Titre" value={this.state.movie.Titre} onChange={this.onChange} placeholder="Titre" />
              </div>
              <div className="form-group">
                <label>Sortie:</label>
                <input type="date" className="form-control" name="Sortie" value={this.state.movie.Sortie} onChange={this.onChange} placeholder="Sortie" />
              </div>
              <div className="form-group">
                <label>Genre:</label>
                <input type="text" className="form-control" name="Genre" value={this.state.movie.Genre} onChange={this.onChange} placeholder="Genre" />
              </div>
              <div className="form-group">
                <label>Synopsys:</label>
                <input type="text" className="form-control" name="Synopsys" value={this.state.movie.Synopsys} onChange={this.onChange} placeholder="Synopsys" />
              </div>
              <div className="form-group">
                <label>Affiche:</label>
                <input type="URL" className="form-control" name="Affiche" value={this.state.movie.Affiche} onChange={this.onChange} placeholder="Affiche" />
              </div>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;