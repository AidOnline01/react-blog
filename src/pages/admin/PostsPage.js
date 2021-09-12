import '@/scss/admin/pages/posts.scss';
import '@/scss/admin/pages/posts-item.scss';
import '@/scss/admin/pages/posts-mobile.scss';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import store from '@/store';
import {deletePost} from '@/store/posts';
import DataTable from 'react-data-table-component';
import {useMemo} from 'react';
import {useWindowSize} from '@react-hook/window-size';

export default function PostsPage(props) {
  const [width] = useWindowSize();
  const posts = useSelector(state => state.posts.posts);
  
  const columns = useMemo(() => [
    {
      name: '#',
      selector: row => row.id,
      width: '50px',
      hide: 550
    },
    {
      name: 'Preview',
      selector: row => <div className="posts__preview" style={{backgroundImage: `url(${row.image})`}} />,
      width: width > 400 ? '112px' : '88px'
    },
    {
      name: 'Title',
      selector: row => <Link className="posts__title" to={`/admin/posts/${row.id}`}>
        {row.title.length > 100 ? row.title.substring(0, 100) + '...' : row.title}
      </Link>,
      grow: 1,
      wrap: true
    },
    {
      name: 'Actions',
      selector: row => <div className="posts__actions">
        <button className="posts__delete" onClick={() => store.dispatch(deletePost(row.id))}>Delete</button>
      </div>,
      width: '100px',
      hide: 480
    }
  ], [width]);

  const customStyles = {
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px'
      }
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px'
      }
    }
  };

  const ExpandedComponent = ({data: row}) => <div className="posts-mobile">
    <div className="posts-mobile__li posts-mobile__li--id">
      <span>ID:</span>
      <div>{row.id}</div>
    </div>

    <div className="posts-mobile__delete">
      <button className="posts__delete" onClick={() => store.dispatch(deletePost(row.id))}>Delete</button>
    </div>
  </div>;

  return <div className="posts">
    <DataTable columns={columns} data={posts} dense customStyles={customStyles} expandableRows={width < 481} expandableRowsComponent={ExpandedComponent} />
  </div>;
}