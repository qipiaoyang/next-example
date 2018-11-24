import React from 'react';
import Link from "next/link";
import "../styles/header.less";
import { Input, Button, Form, Icon, Checkbox } from 'antd';
import { MOBILE,PWD } from "../config/pattern";
import ModalComponent from "./modal";
import { dispatch } from '@rematch/core';
import withRematch from '../model/utils/withRematch'
import { initStore } from '../model/store';

const FormItem = Form.Item;

class Header extends React.Component {

  state = {
    loginVisible: false
  }

  handleSubmit = (e) => {
    this.props.form.validateFields(async (err,value) => {
				await dispatch.indexModel.fetchUsers()
			
    })
  }

  render() {

    const {
      form: {
        getFieldDecorator,
        validateFields,
      }
    } = this.props;

    const { loginVisible } = this.state;

    return (
      <div>
        <header className="header">
          <div className="wrapper">
            <img className="header-logo" src="/static/images/logo.png" />
            <div className="header-action">
              <a className="login" onClick={() => {
                this.setState({
                  loginVisible: true
                })
              }}>登录</a>
              <a className="register">注册</a>
            </div>
            <div className="header-nav">
              <Link href="/"><a className="hover">首页</a></Link>
              <Link href="/"><a>卡券回收</a></Link>
              <Link href="/"><a>账号回收</a></Link>
              <Link href="/list"><a>竞价商城</a></Link>
              <Link href="/"><a>个人中心</a></Link>
            </div>
          </div>
        </header>
        <ModalComponent
          title='登录'
          visible={loginVisible}
          width={"380px"}
          onCancel={() => {
            this.setState({
              loginVisible: false
            })
          }}
         >
          <div className='LoginModal'>
					{console.log(this.props.userList)}
            <div className='LoginModal-title'>账户登录</div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入手机号', pattern: MOBILE }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
                )}
              </FormItem>
              <FormItem className='LoginModal-password'>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码', pattern: PWD }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                    placeholder="请输入密码" />
                )}
              </FormItem>
              <FormItem className='LoginModal-login'>
            
                <a target="_blank" className="login-form-forgot LoginModal-register" href=''>注册</a>
                <span className="ant-divider" />
                <a className="login-form-forgot" href=''>忘记密码</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  立即登录
                </Button>
              </FormItem>
            </Form>
          </div>
        </ModalComponent>
      </div>
    )
  }
}

const mapState = state => ({
	
  })
  
  const mapDispatch = ({ indexModel: { fetchUsers } }) => ({
	fetchUsers: () => fetchUsers()
  })

export default withRematch(initStore,mapState,mapDispatch)(Form.create()(Header));