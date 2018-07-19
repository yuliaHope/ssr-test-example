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
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularArticles(
        path.split('/').pop()
      )
  }
];

export default routes;