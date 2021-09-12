import { useSelector } from 'react-redux';

export default function Blog() {
  const posts = useSelector(state => state.posts.posts);
  
  return <div>{posts.length}</div>;
}