import React from 'react';
import {hashHistory} from 'react-router'

class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <span onClick={this.clickHandle.bind(this)}>返回</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{this.props.title}</span>
            </div>
        )
    }

    clickHandle() {
        const backRouter = this.props.backRouter;
        console.log('backRouter-', backRouter);
        if (backRouter) {
            console.log('hashHistory', hashHistory);
            hashHistory.push(hashHistory);
        } else {
            window.history.back();
        }
    }
}

module.exports = Header;