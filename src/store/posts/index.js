import {createSlice} from '@reduxjs/toolkit';
import * as reducers from './reducers';

let posts = localStorage.getItem('posts/posts');
posts = posts ? JSON.parse(posts) : [];

const initialState = {
  posts
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers
});

export const {setPosts, addPost, deletePost, setPost} = postsSlice.actions;

export default postsSlice.reducer;