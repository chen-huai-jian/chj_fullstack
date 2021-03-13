import { createStore , compose, applyMiddleware} from 'redux' // 引入redux中的store
import reducer from './reducer'
import thunk from 'redux-thunk'
// 增强函数
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))



// 建立一个仓库store
const store = createStore(
    reducer,enhancer
)
export default store