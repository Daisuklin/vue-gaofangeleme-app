import React, { Component } from 'react'
import {
  List,
  Tabs,
  WingBlank,
  Flex,
  WhiteSpace,
  Button
} from 'antd-mobile';
import { common } from 'common';
import { Img } from 'commonComponent';
const TabPane = Tabs.TabPane;

const gotoStore = (goodsDetailInfo) => {
  common.gotoStore({ storeId: goodsDetailInfo.storeId });
}

/**
 * 商品更多信息
 * @param {*} param0 
 */
export default function({ goodsDetailInfo }) {
  const { evaluateStore, storeId } = goodsDetailInfo;
  return <WingBlank style={{padding:'0.2rem 0rem'}}>
    <Flex >
      <Flex.Item style={{ flex: 1 }}>
          {/*<Img src={goodsDetailInfo.storeLabel} style={{width:'100%'}}></Img>*/}
        <Img src={goodsDetailInfo.storeLogo} style={{width:'95%',height:'0.9rem'}}/>
      </Flex.Item>
      <Flex.Item style={{ flex: 2 }}>
        <Flex>
          <Flex.Item style={{ flex: 2 }}>
            <div>
            <div style={{fontSize:'0.28rem',color:'#333',padding:'0.05rem 0rem 0.1rem'}}>{goodsDetailInfo.storeName}</div>
            <div style={{color:'#9c9c9c',fontSize:'0.25rem',padding:'0.05rem 0rem'}}>正品行货，欢迎选购</div>
            </div></Flex.Item>
          <Flex.Item style={{ flex: 1 }}><div style={{ color: 'red', textAlign: 'right' }}>{evaluateStore.averageCredit}</div></Flex.Item>
        </Flex>
      </Flex.Item>
    </Flex>
    <WhiteSpace size="md"></WhiteSpace>
    <Flex>
      <Flex.Item>
        <Flex direction='column'>
          <Flex.Item className="item_name">商品{evaluateStore.sevalDesccredit}</Flex.Item>
          <Flex.Item className="item_price">{goodsDetailInfo.evaluateNum}</Flex.Item>
          <Flex.Item className="item_num">关注人数</Flex.Item>
        </Flex>
      </Flex.Item>
      <Flex.Item>
        <Flex direction='column'>
          <Flex.Item className="item_name">服务{evaluateStore.sevalServicecredit}</Flex.Item>
          <Flex.Item className="item_price">{goodsDetailInfo.storeGoodsNum}</Flex.Item>
          <Flex.Item className="item_num">全部商品</Flex.Item>
        </Flex>
      </Flex.Item>
      <Flex.Item>
        <Flex direction='column'>
          <Flex.Item className="item_name">物流{evaluateStore.sevalDeliverycredit}</Flex.Item>
          <Flex.Item className="item_price">{goodsDetailInfo.storeGoodsCount}</Flex.Item>
          <Flex.Item className="item_num">店铺动态</Flex.Item>
        </Flex>
      </Flex.Item>
    </Flex>
    <WhiteSpace></WhiteSpace>
      {
          storeId != "0" && <Flex>
            <Flex.Item><Button style={{
                height:'0.6rem',
                lineHeight:'0.6rem',
                color:'#333',
                fontSize:'0.22rem',
                borderColor:'#e6e6e6'
            }} onClick={()=>{window.location.href = `home.html#/customerService`;}}><img src="./assets/img/weiqing/kefu@2x.png" style={{width:'0.28rem',heigth:'0.24rem',paddingRight:'0.14rem',postition:'relative',top:'3px'}}/>联系客服</Button></Flex.Item>
            <Flex.Item><Button onClick={() => gotoStore(goodsDetailInfo)} style={{
                height:'0.6rem',
                lineHeight:'0.6rem',
                color:'#333',
                fontSize:'0.22rem',
                borderColor:'#e6e6e6'
            }}><img src="./assets/img/weiqing/dianpu-02@2x.png" style={{width:'0.27rem',heigth:'0.24rem',paddingRight:'0.14rem',postition:'relative',top:'3px'}}/>进入店铺</Button></Flex.Item>
          </Flex>
      }
  </WingBlank>
}
