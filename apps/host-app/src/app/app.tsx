import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import { loadRemoteModule } from '@nx/react/mf';

const App1 = React.lazy(() => loadRemoteModule('app1', './Module'));

const App2 = React.lazy(() => loadRemoteModule('app2', './Module'));

const App3 = React.lazy(() => loadRemoteModule('app3', './Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <h1>Host App</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/app1">App1</Link>
        </li>

        <li>
          <Link to="/app2">App2</Link>
        </li>

        <li>
          <Link to="/app3">App3</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/app1" element={<App1 />} />

        <Route path="/app2" element={<App2 />} />

        <Route path="/app3" element={<App3 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
