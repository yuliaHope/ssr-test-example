import React, { Component } from "react";

const gridStyle = { display: "flex", flexWrap: "wrap" };
const imageBanner = { width: 200, height: 100 };

class Grid extends Component {
  constructor(props) {
    super(props);

    let articles;
    if (__isBrowser__) {
      articles = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      articles = props.staticContext.data;
    }

    this.state = {
      articles,
      loading: articles ? false : true,
    };
  }

  componentDidMount () {
    if (!this.state.articles) {
      this.fetchArticles(this.props.match.params.country);
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.match.params.country !== this.props.match.params.country) {
      this.fetchArticles(this.props.match.params.country);
    }
  }

  fetchArticles = (lang) => {
    this.setState(() => ({
      loading: true
    }));

    this.props.fetchInitialData(lang)
      .then((articles) => this.setState(() => ({
        articles,
        loading: false,
      })));
  }

  render() {
    const { articles = [], loading } = this.state;

    if (loading === true) {
      return <p>LOADING</p>;
    }

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

export default Grid;
