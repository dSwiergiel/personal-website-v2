import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreSplash from './components/main/splash/PreSplash';

const Home = lazy(() => import('./components/pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<PreSplash />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
