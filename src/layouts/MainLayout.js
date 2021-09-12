import {Route, Switch} from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import BlogPage from '@/pages/BlogPage';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '@/components/home/Hero';


export default function MainLayout(props) {
  return <div className="main-layout">
    <Switch>
      <Route exact path="/"><Hero /></Route>
      <Route><Header /></Route>
    </Switch>

    <Switch>
      <Route exact path="/"><HomePage /></Route>
      <Route exact path="/blog"><BlogPage /></Route>
      <Route>test</Route>
    </Switch>

    <Switch>
      <Route exact path="/" />
      <Route><Footer /></Route>
    </Switch>
  </div>;
}