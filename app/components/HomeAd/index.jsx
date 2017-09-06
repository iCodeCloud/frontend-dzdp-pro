import React from 'react';
import './style.less';

class HomeAd extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const data = this.props.data;
        return (
            <div>
                <h2>超级特惠</h2>
                <div>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.title} <br />
                                    {item.img} <br />
                                    {item.link}
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

module.exports = HomeAd;