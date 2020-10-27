import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PreSplash from './components/main/splash/PreSplash';

const Home = lazy(() => import('./components/pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<PreSplash></PreSplash>}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
