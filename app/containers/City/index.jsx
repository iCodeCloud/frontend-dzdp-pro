import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import * as userInfoActionsFromOtherFile from '../../action/userinfo';

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

import localStore from '../../util/localStore'

import {CITYNAME} from '../../config/localStoreKey'
class City extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Header title='选择城市' backRouter='/home'/>
                <hr />
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <hr />
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }

    changeCity(newCity) {
        if (newCity == null) {
            return;
        }

        // 修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);

        // 修改cookie
        localStore.setItem(CITYNAME, newCity);

        // 跳转页面
        hashHistory.push('/');
    }
}
// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)