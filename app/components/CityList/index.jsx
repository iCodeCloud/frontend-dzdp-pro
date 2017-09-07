import React from 'react'

class CityList extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <h3>热门城市</h3>
                <span onClick={this.clickHandle.bind(this, '北京')}>北京</span> <br />
                <span onClick={this.clickHandle.bind(this, '上海')}>上海</span> <br />
                <span onClick={this.clickHandle.bind(this, '沈阳')}>沈阳</span> <br />
            </div>
        )
    }

    clickHandle(cityName) {
        const changeFn = this.props.changeFn;
        changeFn(cityName);
    }
}

module.exports = CityList;