import React, { Component } from "react"
import AreaList from "./AreaList"
import AttractionList from "./AttractionList"
import { isAuthenticated } from "../helpers/simpleAuth"

class ParkExplorer extends Component {

  state = {
    areas: [],
    attractions: []
  }

  componentDidMount() {
    this.getParkAreas()
  }

  getParkAreas = () => {
    // get all park areas
    // set state with new data for park areas
    if (isAuthenticated()) {
      fetch("http://localhost:8000/parkareas", {
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        }
      })
        .then(response => response.json())
        .then(response => this.setState({ areas: response }))
    }
  }

  getParkAttractions = (area_id) => {
    // get all attractions
    // set state with data for attractions
    console.log("Get park attractions")
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/attractions?area=${area_id}`, {
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        }
      })
        .then(response => response.json())
        .then(response => this.setState({ attractions: response }))
    }
  }

  render() {
    return (
      <>
        <main className="explorer">
          <AreaList areas={this.state.areas} getParkAttractions={this.getParkAttractions}/>
          <AttractionList attractions={this.state.attractions}/>
        </main>
      </>
    )
  }
}

export default ParkExplorer
