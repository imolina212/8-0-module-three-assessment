import React from "react";
import "../App.css";

class Locations extends React.Component {
    constructor() {
        super()
        this.state = {
            locations: [],
            showList: false,
        }
    }

    fetchLocations = () => {
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    locations: data,
                })
            })
    }

    componentDidMount = () => {
        this.fetchLocations()
    }


    render() {
        let locationsToDisplay = this.state.locations.map((location) => {
            return (
                <li>
                    <div className="location-card">
                        <h2>Name: {location.name}</h2>
                        <h3>Climate: {location.climate}</h3>
                        <h3>Terrain: {location.terrain}</h3>
                    </div>
                </li>
                

            )
        })
        
        
        return (
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={() => {this.setState({showList: !this.state.showList})}}>{this.state.showList ? "Hide Locations" : "Show Locations"}</button>
                {this.state.showList && <ul>{locationsToDisplay}</ul>}
            </div>
        )
    }
}

export default Locations;