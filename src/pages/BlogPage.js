import '@/scss/pages/blog.scss';
import '@/scss/pages/blog-post.scss';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export default function Blog() {
  const posts = useSelector(state => state.posts.posts);

  const breadcrumbs = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Blog'
    }
  ];
  
  return <div className="blog">
    <Breadcrumbs items={breadcrumbs} />

    <div className="blog__posts">
      {posts.map(post => <div className="blog-post">
        <div className="blog-post__image" style={{backgroundImage: `url(${post.image})`}} />
        <Link className="blog-post__title" to={`/blog/${post.id}`}>{post.title}</Link>
        <div className="blog-post__short">{post.short}</div>
      </div>)}
    </div>
  </div>;
}