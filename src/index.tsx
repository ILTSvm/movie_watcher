import 'antd/dist/antd.css';
import './index.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRouter, routerMap } from './router';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {renderRouter(routerMap)}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
