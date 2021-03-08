import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content) {
            return true
        }else {
            return false
        }
    }

    render() { 
        return (  
            <li onClick={this.handleClick}>
                {this.props.avname}为你服务- {this.props.content}
            </li>
        );
    }
    handleClick(){
        // console.log(this.props.index);
        this.props.deleteItem(this.props.index)
    } 
}
// 类型校验
XiaojiejieItem.propTypes = {
    avname:PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
}
// 数据默认值 设置
XiaojiejieItem.defaultProps ={
    avname: '波多野结衣'
}

export default XiaojiejieItem;