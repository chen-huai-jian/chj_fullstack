import React, { Component, Fragment } from 'react';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import axios from 'axios'
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    componentDidMount() {
        axios.get('https://mock.mengxuegu.com/mock/6044e00cf340b05bceda39e0/example/Xiaojiejie')
            .then((res) => {
                console.log('axios 获取数据成功： ' + JSON.stringify(res))
                this.setState({
                    list:res.data.data
                })
            })

            .catch((error) => {
                console.log('axios 获取数据失败：' + error);
            })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="jspang">增加服务:</label>
                    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.addList.bind(this)} >增加服务</button>
                </div>
                <ul ref={(ul) => this.ul = ul}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem
                                    key={index + item}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
                <Boss />
            </Fragment>
        )
    }
    inputChange() {
        this.setState({
            inputValue: this.input.value
        });

    }
    // 点击增加事件
    addList() {
        if (this.state.inputValue !== "") {
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ""
            }, () => {
                // console.log(this.ul.querySelectorAll('li').length);
            })

        }
    }
    // 删除功能
    deleteItem(index) {
        // console.log();
        let list = this.state.list;
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

}

export default Xiaojiejie;