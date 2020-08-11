import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PreSplash from './components/main/splash/PreSplash';

const Home = lazy(() => import('./components/pages/Home'));
// import Home from './components/pages/Home';
function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Suspense fallback={<PreSplash></PreSplash>}>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/markets' component={Markets} />
        <Route exact path='/markets/:zip/:radius' component={Markets} />
        <Route exact path='/market/:lng/:lat' component={Market} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
    </Router>
    //</Provider>
  );
}

export default App;
