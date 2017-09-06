import React from 'react';
import './style.less';

class HomeHeader extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="clear-fix">
                <div className="clear-fix float-left">{this.props.cityName}</div>
                <div><input/></div>
                <div className="clear-fix float-right">用户</div>
            </div>
        );
    }

}

export default HomeHeader;