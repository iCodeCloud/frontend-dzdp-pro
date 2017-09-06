import React from 'react'
import Item from './Item/index';

class List extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const data = this.props.data;
        console.log('data==', data);
        return (
            <div>
                {
                    data.map((item, index) => {
                        return (
                            <Item key={index} data={item}/>
                        )
                    })
                }
            </div>
        )
    }
}

module.exports = List;