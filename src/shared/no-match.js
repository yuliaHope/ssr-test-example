import React from 'react';
import PropTypes from 'prop-types';

export const NoMatch = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="ui container">
      <h1>Page Not Found!!!</h1>
      <p>Please try again!</p>
    </div>
  );
};

NoMatch.propTypes = {
  staticContext: PropTypes.objectOf(PropTypes.any)
};

NoMatch.defaultProps = {
  staticContext: {}
};
