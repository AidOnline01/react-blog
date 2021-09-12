import '@/scss/admin/core';
import {Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminPostsPage from '@/pages/admin/AdminPostsPage';
import AdminPostPage from '@/pages/admin/AdminPostPage';
import Header from '@/components/admin/Header';

export default function AdminLayout(props) {
  return <div className="admin">
    <Header />
    
    <div className="admin__content">
      <Switch>
        <Route exact path="/admin"><AdminPostsPage /></Route>
        <Route exact path="/admin/posts/:id"><AdminPostPage /></Route>
      </Switch>
    </div>

    <ToastContainer position="bottom-right" />
  </div>;
}