export const setPosts = (state, action) => {
  state.posts = action.payload;
}

export const addPost = (state, action) => {
  state.posts.push(action.payload);
}

export const setPost = (state, action) => {
  const post = JSON.parse(JSON.stringify(action.payload));

  state.posts = state.posts.map(item => {
    if(item.id === post.id) return post;

    return item;
  });
}

export const deletePost = (state, action) => {
  const id = action.payload;

  state.posts = state.posts.filter(post => post.id !== id);
}