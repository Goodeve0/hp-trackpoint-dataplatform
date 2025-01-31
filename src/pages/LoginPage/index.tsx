import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import './index.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // 使用一个状态来控制是否为登录模式

  return (
    <div className="auth-container">
      <div className="info-section">
        <h1>埋点管理平台</h1>
        <div className="icon-placeholder">
          {/*可以放设计中展示的图片等等，这边可以补个项目logo */}
        </div>
        <p>欢迎使用埋点管理平台，您可以在这里管理埋点数据，监控用户行为。</p>
      </div>

      <div className="form-section">
        <div className="form-wrapper">
          <h1>hp-trackpointer</h1>
          {/* 根据 isLogin 状态来切换显示不同的表单 */}
          {isLogin ? (
            <Form name="login" layout="vertical">
              <Form.Item
                name="email"
                rules={[{ required: true, message: '请输入您的邮箱!' }]}
              >
                <Input prefix={<MailOutlined />} placeholder="邮箱" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入您的密码!' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="密码" />
              </Form.Item>

              <Form.Item>
                <Checkbox>记住我</Checkbox>
                <a href="#" className="forgot-password">
                  忘记密码
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  登录
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Form name="register" layout="vertical">
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入您的用户名!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="用户名" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[{ required: true, message: '请输入您的邮箱!' }]}
              >
                <Input prefix={<MailOutlined />} placeholder="邮箱" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入您的密码!' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="密码" />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: '请确认您的密码!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('两次输入的密码不一致!'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="确认密码"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  注册
                </Button>
              </Form.Item>
            </Form>
          )}

          <div className="toggle-link">
            {isLogin ? (
              <span>
                没有账户? <a onClick={() => setIsLogin(false)}>去注册</a>
              </span>
            ) : (
              <span>
                已有账户? <a onClick={() => setIsLogin(true)}>去登录</a>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
