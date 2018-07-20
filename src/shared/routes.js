import Home from './components/home';
import Grid from './components/grid';
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