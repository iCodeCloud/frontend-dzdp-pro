import React from 'react'

class CurrentCity extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <h1>{this.props.cityName}</h1>
        )
    }
}

module.exports = CurrentCity;