import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { App } from './app';
// AppRouter 路由接管一切
import {AppRouter} from './router';
// router jspang
// import { HelloComponent } from './hello';

ReactDOM.render(
    // <App />,
    <AppRouter />,
    document.getElementById('root')
);
