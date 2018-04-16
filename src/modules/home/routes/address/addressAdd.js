import React, { Component } from 'react'
import { withRouter } from 'react-router'
import {
  Modal,
  Toast,
  Flex,
  Button,
  List,
  Checkbox,
  InputItem,
  Picker
} from 'antd-mobile';

import * as addressApi from '../../api/address';
import { common } from 'common';
import { createForm } from 'rc-form';

import './address.less';

const Item = List.Item;
// 地区数据
const district = addressApi.getAreaData();

class AddressAdd extends Component {
  constructor(props) {
    super(props);
    this.state={
    	sty:false,
    	sty1:false
    }
  }

  componentDidMount() {

  }

  onPickerChange = (value) => {
    console.log(value);
  }

  onSubmit = () => {
    // console.log(this.refs.areaInfo);

    // 提交地址
    const fieldsValue = this.props.form.getFieldsValue()
    // check
    if (!fieldsValue.trueName || fieldsValue.trueName == '') {
      Toast.info('收货人姓名不能为空');
      return;
    }
    if (!fieldsValue.mobPhone || fieldsValue.mobPhone.trim() == '') {
      Toast.info('手机号不能为空');
      return;
    }
    if (fieldsValue.mobPhone.length!=13||fieldsValue.mobPhone[0]==0) {
      Toast.info('手机号格式不正确');
      return;
    }
    if (!fieldsValue.zipCode || fieldsValue.zipCode == '') {
      Toast.info('邮政编码不能为空');
        return;
    }
    /* if (String(fieldsValue.zipCode).length!=6||String(fieldsValue.zipCode)[0]==0) {
      Toast.info('邮政编码格式不正确');
      return;
    }*/
    if (!fieldsValue.areaInfo || fieldsValue.areaInfo.length == 0) {
      Toast.info('请选择所在地区');
      return;
    }
    if (!fieldsValue.address || fieldsValue.address == '') {
      Toast.info('详细地址不能为空');
      return;
    }
     /* if (!fieldsValue.telPhone || fieldsValue.telPhone == '') {
          Toast.info('座机电话不能为空');
          return;
      }*/
      /*if (fieldsValue.telPhone.length!=7) {
        Toast.info('座机电话格式不正确');
        return;
      }*/
      Toast.loading();
    const provinceId = fieldsValue.areaInfo[0];
    const cityId = fieldsValue.areaInfo[1];
    const areaId = fieldsValue.areaInfo[2];

    const currentProvince = (district.filter(item => item.value == provinceId))[0]
    const currentCity = (currentProvince.children.filter(item => item.value == cityId))[0]
    const currentArea = (currentCity.children.filter(item => item.value == areaId))[0]
    const currentAreaName = [currentProvince.label, currentCity.label, currentArea.label].join(',');

    addressApi.saveAddress({
      ...fieldsValue,
      provinceId,
      cityId,
      areaId,
      areaInfo: currentAreaName
    }).then(result => {
        Toast.hide();
      if (result.result == 1) {
        this.props.router.replace('/address')
      } else {
        Toast.info(result.msg);
      }
    })

  }
	onBlur=()=>{
		this.setState({
      sty:false
    })
	}
	onFocus=()=>{
		this.setState({
      sty:true
    })
	}
	onBlur1=()=>{
		this.setState({
      sty1:false
    })
	}
	onFocus1=()=>{
		this.setState({
      sty1:true
    })
	}
  render() {
    const { getFieldProps } = this.props.form;
    return <div className='wx-addressadd-add'>
      <List className="picker-list">
         <InputItem
            {...getFieldProps('trueName')}
            clear
            placeholder="请输入收货人"
          >收货人</InputItem>
        <InputItem
            {...getFieldProps('mobPhone')}
            clear
            type='phone'
            placeholder="请输入手机号"
        >手机号</InputItem>
        <InputItem
            {...getFieldProps('zipCode')}
            clear
            type='number'
            placeholder="请输入邮政编码">邮政编码</InputItem>
        <Item className="picker_list_addressAdd_box">
          <Picker
              data={district}
              title="选择地区"
              onPickerChange={this.onPickerChange}
              {...getFieldProps('areaInfo')}

          >
            <List.Item arrow="horizontal" className="picker_list_addressAdd"  >所在地区</List.Item>
          </Picker>
        </Item>
        <InputItem
            {...getFieldProps('address')}
            clear
            onFocus={this.onFocus1}
						onBlur={this.onBlur1}
            placeholder="详细地址">详细地址</InputItem>
        <InputItem
            {...getFieldProps('telPhone')}
            clear
            onFocus={this.onFocus}
						onBlur={this.onBlur}
            type='number'
            placeholder="座机电话">座机电话</InputItem>
        <Item style={{width:'100%',background:'none',padding:'35vh 0px 2vh'}}>
          <Button onClick={this.onSubmit} type='primary' style={{height:'0.7rem',borderRadius:'3px',margin:'0px 0.26rem',lineHeight:'0.65rem',backgroundColor:'#00a9e0',borderColor:'#00a9e0',margin:'0px 0.26rem'}}>提交</Button>
        </Item>
      </List>
    </div>
  }
}

export default withRouter(
  createForm()(AddressAdd)
);
