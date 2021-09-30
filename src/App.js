import { Router } from 'react-router';
import './App.css';
import UserList from './components/UserList';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import PostList from './components/PostList';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="d-flex flex-column">
          <div className="p-2 bg-dark text-center text-white">
            <h1>
              BLOG BELLISSIMO
            </h1>
          </div>
          <Switch>
            <Route exact path="/">
              <UserList />
            </Route>
            <Route exact path="/user/:id/posts">
              <PostList />
            </Route>
            <Route exact path="/post/:id">
              <Post />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <div className="fixed-bottom p-4 bg-dark">
            <Link className="nav-link text-white" to="/">Home</Link>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
