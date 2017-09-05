import React from 'react';
import './style.less';

class HomeHeader extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div>北京</div>
                <div><input /></div>
                <div>用户中心</div>
            </div>
        );
    }

}

export default HomeHeader;