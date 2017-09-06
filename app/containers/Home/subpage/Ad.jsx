import React from 'react'
import HomeAd from '../../../components/HomeAd/index'
import {getAdData} from '../../../fetch/home/home';

class Ad extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data}/>
                        : <div>加载中...</div>
                }
            </div>
        )
    }

    componentDidMount() {
        const result = getAdData();
        // console.log('result=', result);
        result.then((res) => {
            return res.json()
        }).then((json) => {
            console.log('json==', json)
            const data = json;
            if (data.length) {
                console.log('data=', data)
                this.setState({
                    data: data
                })
            }
        })
    }
}

module.exports = Ad;