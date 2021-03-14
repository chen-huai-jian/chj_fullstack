import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <h1>LIStPage--{this.state.id}</h1>
         );
    }
    componentDidMount() {
        console.log(this.props);
        let tempID = this.props.match.params.id
        this.setState({id:tempID})
        
    }
}
 
export default List;