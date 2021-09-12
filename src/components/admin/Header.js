import '@/scss/admin/layout/header.scss';
import { generatePosts } from '@/store/posts/thunks';
import {setPosts} from '@/store/posts';
import store from '@/store';
import {Link, useHistory} from 'react-router-dom';

export default function Header() {
  const history = useHistory();

  return <div className="header">
    <div className="header__container">
      <Link className="header__home" to="/admin">Admin Panel</Link>
      <div className="header__generate"><button onClick={() => generatePosts()}>Generate Content</button></div>
      <div className="header__clear"><button onClick={() => {history.push('/admin'); store.dispatch(setPosts([]))}}>Clear Content</button></div>
      <div className="header__site"><Link to="/">Go to site</Link></div>
    </div>
  </div>;
}