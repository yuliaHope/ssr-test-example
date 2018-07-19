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
    };
  }

  render() {
    const { articles = [] } = this.state;

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
