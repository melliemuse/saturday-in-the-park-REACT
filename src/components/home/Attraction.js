import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Attraction extends Component {
    render() {
        return (
            <>
                <section>
                    <Link to={{
                    pathname: "/myitinerary", 
                    state: {
                        attraction: this.props.attraction
                    }
                    }}>{this.props.attraction.name}
                    </Link>
                </section>
            </>
        )
    }
}

export default Attraction