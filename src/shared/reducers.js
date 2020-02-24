import { combineReducers } from 'redux';
import { FETCH_ARTICLES } from './actions';

const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  articles: articlesReducer
});