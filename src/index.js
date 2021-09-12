import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from '@/store';
import {Provider as ReduxProvider} from 'react-redux';
import {generatePosts} from '@/store/posts/thunks';

// generate posts on first load
if(!window.sessionStorage.getItem('visitedBefore')) {
  generatePosts();
  window.sessionStorage.setItem('visitedBefore', true);
}

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);