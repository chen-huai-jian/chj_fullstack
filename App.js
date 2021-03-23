// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
// SPA  #/ (兼容性好)   / （像后端路由） 
// src/ 目录 架构意义
// /components /pages /api /store /layout页面框架
import Frame from './layout/Frame';
import HookMovie from './pages/HookMovie';
import HookInfos from './pages/HookInfos';



function App() {
  return (
     <BrowserRouter>
        <Frame>
           <Switch>
              <Route path="/" exact component={ HookMovie }/>
              <Route path="/infos" component={ HookInfos }/>
           </Switch>
        </Frame>
     </BrowserRouter>
  );
}

export default App;
