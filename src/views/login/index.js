import React from 'react';
import { Button, Form, Input, Icon, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import styles from './login.less';

const srcImg = require('../../assets/images/logo.png');

class Login extends React.Component {
  static propTypes = {
    form: PropTypes.any.isRequired,
    history: PropTypes.any.isRequired
  };

  state = {
    username: 'Administrator',
    password: '123456',
    isLoding: false
  };

  componentDidMount() {
    this.props.form.setFieldsValue({
      username: this.state.username,
      password: this.state.password
    });
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        sessionStorage.setItem('user', JSON.stringify(values));
        this.setState({
          isLoding: true
        });
        this.$msg.loading('正在登陆...', 2, () => {
          this.setState({
            isLoding: false
          });
          this.$msg.success('登陆成功');
          setTimeout(() => {
            this.props.history.push('/admin');
          }, 500);
        });
      }
    });
  };

  toRegister = e => {
    e.preventDefault();
    this.props.history.push('/register');
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="middle-box login-page">
        <div
          className={`m-box ${styles['login-form']} ${
            this.state.isLoding ? ' blur-2' : ' blur-0'
          }`}
        >
          <div className="login-form-wallpaper" />
          <div className="text-center">
            <img
              src={srcImg}
              width="100"
              height="100"
              alt="logo"
              className={styles.logo}
            />
          </div>
          <h1
            className="text-center"
            style={{ color: '#1890FF', fontSize: 'rgba(24, 144, 255, 0.91)' }}
          >
            EUEN ADMIN
          </h1>
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              {/* <a className="login-form-forgot" href="">
                Forgot password
              </a> */}
              <Button
                className="btn-block btn-lg"
                type="primary"
                htmlType="submit"
                disabled={this.state.isLoding}
              >
                Log in
              </Button>
              Or
              <a href="#" onClick={this.toRegister}>
                没有账号？点击注册
              </a>
            </Form.Item>
          </Form>

          <div style={{ color: '#9fa8b1' }} className="text-center">
            Euen admin platform
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);
