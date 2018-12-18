import React from 'react';
import { Icon } from 'antd';

export default class AppFooter extends React.Component {
  render() {
    return (
      <div className="text-center">
        <Icon type="cloud" />
        Make by &nbsp;
        <span>{/* <Tag color="blue">EUEN</Tag> */}</span>
      </div>
    );
  }
}
