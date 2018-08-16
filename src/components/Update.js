import React from 'react'
import AddMovieForm from '../pages/AddMovieForm'
import axios from  'axios'

const Movie =({movie}) => JSON.stringify(movie.Titre, movie.Sortie)
class Update extends React.Component {

    getInitialState() {
        return {
            movie: {}
        }
    }

    componentDidMount() {
        const id = this.props.id
        console.log('props', id)
        axios
            .get(`http://localhost:3030/movie/movielist/${id}`)
            .then((data) => {
                this.setState(state => {
                    state.movie = data
                    return state
                })
            })
            .catch((err) => {
                console.error('err', err)
            })
    }

    handleSubmit(data){
        const id = this.props.id
        console.log('props', id)
        axios.put(`http://localhost:3030/movie/updatemovie/${id}`, data)
    }

    render() {
        return (
            <div>
                <AddMovieForm onSubmit={this.handleSubmit.bind(this)}
                      Titre={this.state.movie.Titre}
                      Sortie={this.state.movie.Sortie}
                />   
            </div>
        )
    }
}

export default Update