import '@/scss/admin/pages/post.scss';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {setPost as setStorePost} from '@/store/posts';
import store from '@/store';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {toast} from 'react-toastify';

import toBase64 from '@/utils/toBase64';


export default function PostPage() {
  const {id} = useParams();
  const [post, setPost] = useState(useSelector(state => state.posts.posts.find(post => post.id === +id)));

  const onUploadImage = async event => {
    const file = event.target.files[0];

    const image = await toBase64(file);

    setPost({...post, image});
  };

  const onSave = () => {
    store.dispatch(setStorePost(post));

    toast.success('Successfully saved!');
  };

  return <div className="post">
    <Card>
      <CardHeader title="Edit post" />

      <CardContent>
        <div className="post__fields">
          <div className="post__field">
            <label className="post__image" style={{backgroundImage: `url(${post.image})`}}>
              <input type="file" onChange={onUploadImage} />
            </label>
          </div>

          <div className="post__field">
            <TextField label="Title" value={post.title} onChange={e => setPost({...post, title: e.target.value})} fullWidth />
          </div>

          <div className="post__field">
            <TextField label="Content" value={post.content} onChange={e => setPost({...post, content: e.target.value})} multiline fullWidth minRows={3} maxRows={10} />
          </div>

          <div className="post__field">
            
          </div>
        </div>
      </CardContent>

      <CardActions>
        <Button className="post__save" variant="outlined" onClick={onSave}>Save</Button>
      </CardActions>
    </Card>
  </div>;
}