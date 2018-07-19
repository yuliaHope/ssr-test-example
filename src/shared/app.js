import React, { Component } from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import Menu from './menu';
import NoMatch from './no-match'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />

        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <Component {...props} {...rest} />
              )}
            />
          ))}
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;