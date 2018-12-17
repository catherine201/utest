import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './register.less';

const FormItem = Form.Item;

const srcImg = require('../../assets/images/logo.png');

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    isLoding: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({
          isLoding: true
        });
        this.$msg.loading('正在注册...', 2, () => {
          this.$msg.success('注册成功');
          setTimeout(() => {
            this.setState({
              isLoding: false
            });
            this.props.history.push('/login');
          }, 500);
        });
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  toLogin = e => {
    e.preventDefault();
    this.props.history.push('/login');
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    return (
      <div className="middle-box">
        <div
          className={`m-box  register-form ${styles['register-form']}${
            this.state.isLoding ? ' blur-2' : ' blur-0'
          }`}
        >
          <div className={styles['register-form-wallpaper']} />
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
          <Form onSubmit={this.handleSubmit} className={styles['ant-form']}>
            <FormItem {...formItemLayout} label="user">
              {getFieldDecorator('user', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your user!'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Password">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!'
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input type="password" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Confirm Password">
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!'
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                className={styles['login-form-button']}
                disabled={this.state.isLoding}
              >
                Register
              </Button>
              <br />
              Or
              <a href="#" onClick={this.toLogin}>
                已有账号，点击登陆!
              </a>
            </FormItem>
          </Form>

          <div style={{ color: '#9fa8b1' }} className="text-center">
            Euen admin platform
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(RegistrationForm);
