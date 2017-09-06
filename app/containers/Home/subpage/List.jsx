import React from 'react';
import {getListData} from '../../../fetch/home/home';
import ListCompoent from '../../../components/List';

class List extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                        ? <ListCompoent data={this.state.data}/>
                        : <div>加载中...</div>
                }
                {/*
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                */}
            </div>
        )
    }

    componentDidMount() {
        this.loadFirstPageData();
    }

    // 获取首页数据
    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        this.resultHandle(result);
    }

    // 处理数据
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                hasMore,
                data: this.state.data.concat(data)
            })
        }).catch(e => {
            if (__DEV__) {
                console.error('首页”猜你喜欢“获取数据报错, ', e.message)
            }
        })
    }
}

module.exports = List;