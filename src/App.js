import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import loadable from '@loadable/component';
import '@/scss/core';

const MainLayout = loadable(() => import('@/layouts/MainLayout'));
const AdminLayout = loadable(() => import('@/layouts/AdminLayout'));

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin"><AdminLayout/></Route>
        <Route><MainLayout /></Route>
      </Switch>
    </Router>
  );
}

export default App;
