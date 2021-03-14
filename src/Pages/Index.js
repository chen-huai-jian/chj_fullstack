import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { cid: 123, title: '加油-1' },
                { cid: 456, title: '加油-2' },
                { cid: 789, title: '加油-3' }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>Jsapng</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}><Link to={'/list/'+item.cid }>{item.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default Index;