import React from 'react'

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <p>header</p>
                {this.props.children}
                <p>footer</p>
            </div>
        )
    }
}

module.exports = App;