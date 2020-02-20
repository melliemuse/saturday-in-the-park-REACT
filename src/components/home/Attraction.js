import React, { Component } from 'react'

class Attraction extends Component {
    render() {
        return (
            <>
                <section>
                    <p>{this.props.attraction.name}</p>
                </section>
            </>
        )
    }
}

export default Attraction