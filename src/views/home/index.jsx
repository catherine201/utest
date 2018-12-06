// import React from 'react';

// const Home = () => <h2>home</h2>;

// export default Home;

import React, { Component } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// import { Button } from 'antd';
// import { FrontendAuth } from '../../components/frontend-auth.component';
import routes from './route';
// @CSSModules(styles)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          home
          <Switch>
            {renderRoutes(routes)}
            {/* <FrontendAuth config={routes} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
