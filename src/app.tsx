import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';

// class App extends Component {
//   constructor() {
//     this.state = {

//     }
//   }
//   render() {
//     return (

//     )
//   }
// }

// StatelessComponent
export const App = () => {
    // React hooks name 状态的名字， setName 修改状态用setName 
    // 共享状态  
    const [name, setName] = React.useState("") // state 
    // react hooks 
    // 函数式组件可以借助一些魔法函数来实现状态 
    // class .bind this 最高级的地方
    // ts 帮助我们在开发过程中就可以避免很多错误
    // js 太随意， bad pattern The god parts The bad parts
    // ts 还可以像Java一样  提示更友好
      const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
      }
    // setTimeout(() => {
    //     setName('aaaa')
    // }, 3000);
    return (
        <>
            <HelloComponent userName={name} />
            {<NameEditComponent userName={name} onChange={setUsernameState} /> }
        </>
    )
}
