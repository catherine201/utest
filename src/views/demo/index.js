import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styles from '../../test.less';

/* eslint-disable */
function Test(props) {
  const { test } = props;
  return (
    <div>
      <p>useStateObject api</p>
      <Icon type="loading" />
      <i className="iconfont hd-icon-index-delete"></i>
      <p>{test}</p>
    </div>
  );
}
/* eslint-enable */

Test.propTypes = {
  test: PropTypes.number.isRequired
};
const mapStateToProps = state => ({
  test: state.demo.test
});

const mapDispatchToProps = dispatch => ({
  setTest: dispatch.demo.setTest
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Test, styles));
