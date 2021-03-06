import React from 'react'

class LoadMore extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }

    // 点击，加载更多
    loadMoreHandle() {
        // 执行传递过来的loadMoreData函数
        this.props.loadMoreFn();
    }

    componentDidMount() {
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timeoutId;

        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn();
            }
        }

        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return;
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback, 50);
        }.bind(this), false);
    }
}

module.exports = LoadMore;