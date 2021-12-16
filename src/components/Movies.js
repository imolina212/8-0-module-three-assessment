import React from "react"
import "../App.css"



class Movies extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            currMovie: null,
        }
    }

    fetchMovies = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movies: data,
                })
            })
    }

    componentDidMount = () => {
        this.fetchMovies()
    }

    handleDropdownChange = (event) => {
        this.setState({
            currMovie: event.target.value,
        })
    }

    render() {
        let dropDownOptions = this.state.movies.map((movie, index) => {
            return <option value={index}>{movie.title}</option>
        })

        let movie = this.state.movies[this.state.currMovie]
        console.log("movies", this.state.movies)
        console.log("currMovie", this.state.currMovie)

        return (
            <div className="movies">
                <h1>Select a Movie</h1>
                <select onChange={this.handleDropdownChange}>
                    <option></option>
                    {dropDownOptions}
                </select>
                {this.state.movies.length && this.state.currMovie && <div>
                    <h3>Title: {movie.title}</h3>
                    <h3>Release Date: {movie.release_date}</h3>
                    <h3>Description: {movie.description}</h3>
                </div>}
            </div>

        )
    }
}

export default Movies