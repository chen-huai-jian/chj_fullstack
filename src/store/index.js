import { createStore } from 'redux' // 引入redux中的store
import reducer from './reducer'

// 建立一个仓库store
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store