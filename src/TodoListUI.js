import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

// 无状态组件  无业务逻辑尽量使用
// 函数式组件，性能好点
const TodoListUI = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ margin: '10px', width: '250px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button type="primary" onClick={props.clickBtn}>
                    增加
                            </Button>
            </div>
            <div style={{ margin: '10px', width: "300px" }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => <List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>}

                />
            </div>
        </div>
    );
}






// class TodoListUI extends Component {
//     render() { 
//         return ( 
//             <div style={{ margin: '10px' }}>
//                 <div>
//                     <Input
//                         placeholder={this.props.inputValue}
//                         style={{ margin: '10px', width: '250px' }}
//                         onChange={this.props.changeInputValue}
//                         value={this.props.inputValue}
//                     />
//                     <Button type="primary" onClick={this.props.clickBtn}>
//                         增加
//                     </Button>
//                 </div>
//                 <div style={{margin:'10px', width:"300px"}}>
//                     <List 
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index) => <List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>}

//                     />
//                 </div>
//             </div>
//          );
//     }
// }

export default TodoListUI;