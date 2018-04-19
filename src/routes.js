import React from 'react';
import { BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';

import PostIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';

export default () => {
  return(
    <Router>
      <Switch>
        <Route path="/posts/new" exact component={PostsNew} />
        <Route path="/posts/:id" exact component={PostShow} />
        <Route path="/" exact component={PostIndex} />
      </Switch>
    </Router>
  )
}
