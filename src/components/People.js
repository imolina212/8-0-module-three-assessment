import React from "react"
import "../App.css"



class People extends React.Component {
    constructor() {
        super()
        this.state = {
            people: [],
            person: "",
            userInput: "",
        }
    }

    fetchPeople = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    people: data,
                })
            })
    }

    componentDidMount = () => {
        this.fetchPeople()
    }

    handleInput = (event) => {
        this.setState({
            userInput: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            person: this.state.userInput,
        })
    }

    render() {
        let peopleSearch = this.state.people.filter((person) => person.name === this.state.person)

        return (
            <div className="people">
                <h1>Search for a Person</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Find Your Person"
                        value={this.state.userInput}
                        onChange={this.handleInput}
                    ></input>
                    <button>Submit</button>
                </form>
                {peopleSearch.length 
                    ? peopleSearch.map((person) => {return (<div>
                        <h2>Name: {person.name}</h2>
                        <h2>Age: {person.age}</h2>
                        <h2>Gender: {person.gender}</h2>
                    </div>)}) 
                    : <h2>Not Found</h2>}
                
            </div>

        )
    }
}

export default People
