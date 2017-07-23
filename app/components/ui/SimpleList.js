import React from 'react';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style/css';
import '../../css/SimpleList.css';
import NavBar from 'antd-mobile/lib/nav-bar';
import 'antd-mobile/lib/nav-bar/style/css';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/icon/style/css';

const Item = List.Item;
const Brief = Item.Brief;
const ReactRouter = require('react-router-dom');
const Link = ReactRouter.Link;

const SimpleList = ({result}) =>
     (
        <div>
            <NavBar mode="dark"
                    iconName="false"
                    leftContent={
                        <Link to="/"><Icon type="search"/></Link>
                    }
            >靓号清单</NavBar>
            <List>
            {
                result.map(function(item, index){
                    return (
                        <Item key={index}>
                            <div className='phone_number_item_container'>
                                <div className='phone_number_info_item'>
                                    <div className='phone_number'>{item.phoneNumber}</div>
                                    <div className='phone_number_details'>
                                        <div>状态: {item.statusName}</div>
                                        <div>号池: {item.name}</div>
                                        <div>等级/原等级: {item.pnLevelId}/{item.prePnLevelId}</div>
                                    </div>
                                </div>
                                <div className='phone_number_price_details'>
                                    <div>保底:<span className='font_style'>{item.realPnLowPrice}</span>元</div>
                                    <div>预存:<span className='font_style'>{item.realPreStorePrice}</span>元</div>
                                </div>
                            </div>
                    </Item>);
                })
            }
            </List>
        </div>
     );

export default SimpleList;
