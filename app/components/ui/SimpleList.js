import React from 'react';

import {Icon, NavBar, Toast, List} from 'antd-mobile';

import PhoneItem from './PhoneItem';
import '../../css/SimpleList.css';

const Item = List.Item;
const dateFormat = require('dateformat');
const MAX = 5;

const SimpleList = ({result, history, favorites, onAddFav=f=>f}) => {
    return (
        <div>
            <div className="top_nav_bar">
                <NavBar mode="dark"
                        iconName="false"
                        leftContent={<Icon type={require('../../svgs/search-o.svg')} />}
                        rightContent={
                            <Icon
                                onClick={ (e)=> {
                                    e.preventDefault();
                                    history.push('/favorites');
                                }}
                                type={require('../../svgs/star-o.svg')}/>
                        }
                        onLeftClick={ (e) => {e.preventDefault(); history.push('/'); }}
                >靓号清单
                </NavBar>
            </div>

            <div className="phone_list_container">
                <List>
                    {
                        result.map(function(item, index){
                            return (
                                <Item
                                    key={index}
                                    extra={<Icon
                                        size="small"
                                        style={{ color: 'yellow', alignSelf: 'flex-end' }}
                                        type="star-o-d"
                                        onClick={ (e) => {
                                            e.preventDefault();
                                            if(favorites.length === MAX)
                                                return Toast.fail("收藏满", 2)
                                            const newItem = Object.assign({}, item);
                                            newItem.date = dateFormat(new Date(), 'yy-mm-dd');
                                            onAddFav(newItem);
                                            Toast.success("收藏成功", 1);
                                        } } />}
                                >
                                    <PhoneItem item={item} showStart={true}/>
                                </Item>);
                        })
                    }
                </List>
            </div>
        </div>
    );
}

export default SimpleList;
