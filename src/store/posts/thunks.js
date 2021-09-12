import {addPost} from '@/store/posts';
import store from '@/store'
import faker from 'faker';

export const generatePosts = () => {
  const posts = [];

  const lastPost = store.getState().posts.posts.at(-1);
  const lastId = lastPost ? lastPost.id : 0;

  for(let i = 1; i <= 30; i++) {
    const post = {};

    post.id = lastId + i;
    post.title = faker.lorem.sentence();
    post.short = faker.lorem.paragraph();
    post.image = `https://picsum.photos/seed/${faker.datatype.number()}/1000/600`;
    post.content = faker.lorem.paragraphs();

    posts.push(post);
  }

  posts.forEach(post => store.dispatch(addPost(post)));
}