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
        let dropDownOptions = this.state.movies.map((movie) => {
            return <option value={movie.title}>{movie.title}</option>
        })
        return (
            <div className="movies">
                <h1>Select a Movie</h1>
                <select onChange={this.handleDropdownChange}>
                    {dropDownOptions}
                </select>
            </div>

        )
    }
}

export default Movies