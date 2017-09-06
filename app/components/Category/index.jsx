import React from 'react';
import './style.less';
import ReactSwipe from 'react-swipe';


/**
 * 轮播图：https://github.com/voronianski/react-swipe
 *  opt配置： https://github.com/voronianski/swipe-js-iso#config-options
 */
class Category extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0
        }
    }

    render() {
        var opt = {
            auto: 2000, // 2秒自动滚动一次
            callback: function (index, elem) {
                this.setState({index: index})
            }.bind(this)
        }
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div>PANE 1</div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>
                </ReactSwipe>
                <div>
                    {this.state.index}
                </div>
            </div>
        )
    }

}

export default Category;