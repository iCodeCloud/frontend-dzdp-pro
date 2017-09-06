import React from 'react'

class List extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const data = this.props.data;
        console.log('data==', data);
        return (
            <div>111</div>
        )
    }
}

module.exports = List;