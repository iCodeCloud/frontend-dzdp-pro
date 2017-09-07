import React from 'react';
import {getListData} from '../../../fetch/home/home';
import ListCompoent from '../../../components/List';
import LoadMore from '../../../components/LoadMore/index';

class List extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [], // 存储列表信息
            hasMore: false, // 是否有下一页
            isLoadingMore: false, // 当前状态，按钮的文字状态， “加载中”中和“加载更多信息”
            page: 0  // 页数
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
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
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

    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
        this.resultHandle(result);

        // 增加page
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
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