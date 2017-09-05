import React from 'react'

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
        // 1秒钟加载消失
        setTimeout(() => {
            this.setState({
                initDone: true
            })
        }, 1000);
    }
}

module.exports = App;