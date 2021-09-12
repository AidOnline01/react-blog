import '@/scss/admin/core';
import {Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PostsPage from '@/pages/admin/PostsPage';
import PostPage from '@/pages/admin/PostPage';
import Header from '@/components/admin/Header';

export default function AdminLayout(props) {
  return <div className="admin">
    <Header />
    
    <div className="admin__content">
      <Switch>
        <Route exact path="/admin"><PostsPage /></Route>
        <Route exact path="/admin/posts/:id"><PostPage /></Route>
      </Switch>
    </div>

    <ToastContainer position="bottom-right" />
  </div>;
}