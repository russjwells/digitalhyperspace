import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import PostContainer from './container/PostContainer/PostContainer';
import PostDetailView from './container/PostDetailView/PostDetailView';
import IndexView from './container/IndexView/IndexView';
import ProjectsView from './container/ProjectsView/ProjectsView';
import TeamView from './container/TeamView/TeamView';
import AboutView from './container/AboutView/AboutView';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={IndexView} />
    <Route path="/post/:slug" component={PostDetailView}/>
    <Route path="/projects" component={ProjectsView}/>
    <Route path="/team" component={TeamView}/>
    <Route path="/about" component={AboutView}/>
  </Route>
);

export default routes;
