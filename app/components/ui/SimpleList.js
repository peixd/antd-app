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

const SimpleList = ({result, onShowNavBar=f=>f}) => {
    console.log()
    return (
        <div>
            <div className="top_nav_bar">
                <NavBar mode="dark"
                        iconName="false"
                        leftContent={
                            <Link to="/"><Icon type="search"/></Link>
                        }
                        onLeftClick={ ((e) => {e.preventDefault(); onShowNavBar(true) }) }
                >靓号清单
                </NavBar>
            </div>

            <div className="phone_list_container">
                <List>
                    {
                        result.map(function(item, index){
                            return (
                                <Item key={index}>
                                    <div className='phone_number_item_container'>
                                        <div className='phone_number_info_item'>
                                            <div className='phone_number'>{item.PHONE_NUMBER}</div>
                                            <div className='phone_number_details'>
                                                <div>状态: {item.STATUS_NAME}</div>
                                                <div>号池: {item.NAME}</div>
                                                <div>等级/原等级: {item.PN_LEVEL_ID}/{item.PRE_PN_LEVEL_ID}</div>
                                            </div>
                                        </div>
                                        <div className='phone_number_price_details'>
                                            <div>保底:<span className='font_style'>{item.REAL_PN_LOW_PRICE}</span>元</div>
                                            <div>预存:<span className='font_style'>{item.REAL_PRE_STORE_PRICE}</span>元</div>
                                        </div>
                                    </div>
                                </Item>);
                        })
                    }
                </List>
            </div>
        </div>
    );
}


export default SimpleList;
