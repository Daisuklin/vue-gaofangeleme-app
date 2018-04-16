import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { common } from 'common';
import * as memberApi from '../../api/member';
import './updataCommon.less'

const Item = List.Item;

class CreatePayword extends Component {
  timout = null
  code = null
  memberId = null
  state = {
    countDown: 60,
    showCountDown: false,
  }

  onSubmit = () => {
    const getFieldsValue = this.props.form.getFieldsValue();
    if (!getFieldsValue.password || getFieldsValue.password == '') {
      Toast.info('请输入密码！');
      return;
    }
    if (!getFieldsValue.password2 || getFieldsValue.password2 == '') {
      Toast.info('请确认密码！');
      return;
    }

    if (getFieldsValue.password != getFieldsValue.password2) {
      Toast.info('两次输入的密码不一致！');
      return;
    }
    memberApi.updatePaymentPass({
      newpassword: getFieldsValue.password
    }).then(result => {
      // 修改密码处理
      if (result.result == 0) {
        Toast.fail(result.msg);
        return;
      }

      // 修改成功提示
      Toast.success(result.msg);
      // 跳转到登录
      this.props.router.push('/my')
    });
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (<form className='wx-reg'>
      <List className="createPayWord">
        <InputItem {...getFieldProps('password') } placeholder="请输入密码" type="password">
        </InputItem>
        <InputItem {...getFieldProps('password2') } placeholder="请确认密码" type="password">
        </InputItem>
        <Item style={{padding:'0.1rem 0.26rem'}}>
          <Button type="primary" onClick={this.onSubmit} style={{height:'0.7rem',borderRadius:'3px',margin:'0px 0.26rem',lineHeight:'0.65rem',backgroundColor:'#00a9e0',borderColor:'#00a9e0'}}>保存</Button>
        </Item>
      </List>
    </form>);
  }
}

export default createForm()(CreatePayword);
