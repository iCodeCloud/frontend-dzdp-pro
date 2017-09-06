import React from 'react'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFromOtherFile from '../action/userinfo';


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false // loading标识
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>加载中...</div>
                }
            </div>
        )
    }

    componentDidMount() {
        // 从localstoreage里面获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京';
        }

        // 将城市信息存储到Redux中
        this.props.userInfoActions.update({
            cityName
        })

        // 修改状态
        this.setState({
            initDone: true
        })
    }
}


// -------------------redux react 绑定--------------------


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

//module.exports = App;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);