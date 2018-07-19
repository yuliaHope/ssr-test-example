import React, { Component } from 'react';

const gridStyle = { display: 'flex', flexWrap: 'wrap' };
const imageBanner = { width: 200, height: 100 };

class Grid extends Component {
  render() {
    const articles = this.props.staticContext.data || [];

    return (
      <ul style={gridStyle}>
        {articles.map(({ title, url, publishedAt, urlToImage }) => (
          <li key={url} style={{margin: 30}}>
            <ul>
              <li><img src={urlToImage} alt="banner" style={imageBanner} ></img></li>
              <li><a href={url}>{title}</a></li>
              <li>{publishedAt}</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

export default Grid;