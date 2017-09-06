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
                    <div>
                        <ul>
                            <li>第一张</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>第二张</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>第三张</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div>
                    <ul>
                        <li className={this.state.index === 0 ? 'selected' : ''}>1</li>
                        <li className={this.state.index === 1 ? 'selected' : ''}>2</li>
                        <li className={this.state.index === 2 ? 'selected' : ''}>3</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Category;