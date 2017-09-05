import React from 'react'
import HomeHeader from '../../components/HomeHeader'

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <HomeHeader />
            </div>
        )
    }
}

module.exports = Home;