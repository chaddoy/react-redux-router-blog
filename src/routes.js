import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Posts from './components/posts';
import PostsNew from './components/post-new';
import Post from './components/post';

const FourOhFour = () => {
	return <div>404</div>;
};

export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ Posts } />
		<Route path="posts/new" component={ PostsNew } />
		<Route path="posts/:id" component={ Post } />
		<Route path="*" component={ FourOhFour } />
	</Route>
);
