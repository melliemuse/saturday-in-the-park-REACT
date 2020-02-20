import React, { Component } from 'react'

class ItineraryForm extends Component {
    state = {
        starttime: null
    }

    handleChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    addItineraryItem = () => {
        fetch(`http://localhost:8000/itineraryitems`, {
        "method": "POST",
        "headers": {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
            "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        },
        "body": JSON.stringify({
            "starttime": parseInt(this.state.starttime),
            "ride_id": this.props.location.state.attraction.id
        })
        }
        )}

    render() {
        // console.log(this.props.location.state.attraction.name)
        return (
            <>
            <h1>What time would you like to ride {this.props.location.state.attraction.name}?</h1>
            <input id="starttime" onChange={this.handleChange}></input>
            <div>
            <button onClick={this.addItineraryItem}>Add Ride to Docket</button>
            </div>
            </>
        )
    }
}

export default ItineraryForm 
