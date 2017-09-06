import React from 'react'
import {Link} from 'react-router'

class Item extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const data = this.props.data;
        return (
            <div>
                <Link to={`/detail/${data.id}`}>
                    {data.img}
                    <br />
                    {data.title}
                    {data.distance}
                    <br />
                    {data.subTitle}
                    <br />
                    ￥{data.price}
                    已售{data.mumber}
                    <hr />  
                </Link>
            </div>
        )
    }
}

module.exports = Item;