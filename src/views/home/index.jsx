// import React from 'react';

// const Home = () => <h2>home</h2>;

// export default Home;
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import { Button } from 'antd';
// import { FrontendAuth } from '../../components/frontend-auth.component';
import routes from './route';
// @CSSModules(styles)

class Home extends Component {
  render() {
    return (
      <div>
        home6666
        {/* {this.props.children} */}
        <Switch>
          {renderRoutes(routes)}
          {/* <FrontendAuth config={routes} /> */}
        </Switch>
      </div>
    );
  }
}
// Home.propTypes = {
//   children: PropTypes.any.isRequired
// };

export default Home;
