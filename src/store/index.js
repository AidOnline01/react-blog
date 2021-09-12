import {configureStore} from '@reduxjs/toolkit';
import posts from './posts';

const store = configureStore({
  reducer: {
    posts
  }
});

export default store;

// persist state
store.subscribe(() => {
  const state = store.getState();
  const posts = state.posts.posts;

  localStorage.setItem('posts/posts', JSON.stringify(posts));
});