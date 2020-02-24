import Home from './home';
import Grid from './grid';
import { fetchPopularArticles } from './api'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:country',
    ...Grid,
  }
];

export default routes;