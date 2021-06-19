import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page404 from './Page404';
import PageHome from './PageHome';
import PageStack from './PageStack';
import PageQueue from './PageQueue';
import PageDeque from './PageDeque';

const routers = [
  {
    path: '/',
    name: 'home',
    component: PageHome,
  },
  { path: '/stack', name: 'stack', component: PageStack },
  { path: '/queue', name: 'queue', component: PageQueue },
  { path: '/deque', name: 'deque', component: PageDeque },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="p-16">
        <ol className="flex">
          {routers.map(({ path, name }, index) => (
            <li key={`${index}-${path}`} className="mr-24">
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ol>
        <hr />
        <Switch>
          {routers.map(({ path, component }, index) => (
            <Route
              key={`${index}-${path}`}
              exact={index === 0}
              path={path}
              component={component}
            />
          ))}
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
