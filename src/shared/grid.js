import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from './actions';

const gridStyle = { display: 'flex', flexWrap: 'wrap' };
const imageBanner = { width: 200, height: 100 };
const EMPTY_ARRAY = [];

class Grid extends Component {
  componentDidMount() {
    if (!this.props.articles) {
      this.fetchArticles(this.props.match.params.country);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.country !== this.props.match.params.country) {
      this.props.fetchArticles(this.props.match.params.country);
    }
  }

  render() {
    const { articles = [] } = this.props;

    return (
      <ul style={gridStyle}>
        {articles.map(({ title, url, publishedAt, urlToImage }) => (
          <li key={url} style={{ margin: 30 }}>
            <ul>
              <li>
                <img src={urlToImage} alt="banner" style={imageBanner} />
              </li>
              <li>
                <a href={url}>{title}</a>
              </li>
              <li>{publishedAt}</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const fetchInitialData = (store, param) => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  return store.dispatch(fetchArticles(param)); // Manually dispatch a network request
};

export default {
  component: connect(mapStateToProps, { fetchArticles })(Grid),
  fetchInitialData,
};
