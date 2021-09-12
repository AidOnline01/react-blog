import '@/scss/pages/post.scss';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export default function Post() {
  const {id} = useParams();
  const post = useSelector(state => state.posts.posts).find(post => post.id === +id);

  const breadcrumbs = [
    {name: 'Home', link: '/'},
    {name: 'Blog', link: '/blog'},
    {name: post.title}
  ];
  
  return <div className="post">
    <Breadcrumbs items={breadcrumbs} />

    <div className="post__image" style={{backgroundImage: `url(${post.image})`}}></div>
    <div className="post__title">{post.title}</div>
    <div className="post__content">{post.content}</div>
  </div>;
}