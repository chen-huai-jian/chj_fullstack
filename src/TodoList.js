import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store'
// import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './store/actionTypes'
import {getTodoList,changeInputAction, addItemAction, deleteItemAction} from './store/actionCreators'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
        
    }
    render() { 
        return ( 
            <TodoListUI 
                inputValue= {this.state.inputValue}
                changeInputValue = {this.changeInputValue}
                clickBtn = {this.clickBtn}
                list= {this.state.list}
                deleteItem={this.deleteItem}

            />
         );
    }
    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }

    changeInputValue(e){
        // console.log(e.target.value);
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    
    clickBtn() {
        // console.log('jspang');
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        // console.log(index);
        const action =deleteItemAction(index)
        store.dispatch(action)
        
    }
}
 
export default TodoList;
