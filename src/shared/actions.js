import { fetchPopularArticles } from './api';

export const FETCH_ARTICLES = 'fetch_articles';

export const fetchArticles = country => async dispatch => {
  const articles = await fetchPopularArticles(country);

  dispatch({
    type: FETCH_ARTICLES,
    payload: articles,
  });
};
