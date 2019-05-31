import * as React from 'react';
import * as Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Loading() {
  return <div>Loading</div>;
}

const App = Loadable({
  loader: () => import(/* webpackChunkName: "App" */ '../components/Views/App'),
  loading: Loading,
  delay: 1000
});

const Auth = Loadable({
  loader: () => import(/* webpackChunkName: "Auth" */ '../components/Views/Auth'),
  loading: Loading,
  delay: 1000
});

function MainRoutes() {
  return (
    <Router>
      {/* <Route exact path="/signup" component={} />
      <Route exact path="/login" component={} /> */}
      <Route exact path="/" component={App} />
      <Route exact path="/auth" component={Auth} />
    </Router>
  );
}

export default MainRoutes;
