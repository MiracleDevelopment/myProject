import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import Page1 from './page/Page1';
import Page2 from './page/Page2';
import Page3 from './page/Page3';
import './index.css';
ReactDOM.render(
 	<Router history={browserHistory}>
 		<Route path="/" component={App}>
 			<Route path="page1" component={Page1}/>
 			<Route path="page2" component={Page2}/>
 			<Route path="page3" component={Page3}/>
 			<Route path="*" component={App}/>
 		</Route>
 	</Router>,
  document.getElementById('root')
);
