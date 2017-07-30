import React from 'react';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style/css';
import '../../css/SimpleList.css';
import NavBar from 'antd-mobile/lib/nav-bar';
import 'antd-mobile/lib/nav-bar/style/css';
import Toast from 'antd-mobile/lib/toast';
import 'antd-mobile/lib/toast/style/css';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/icon/style/css';
import PhoneItem from './PhoneItem';

const Item = List.Item;
const Brief = Item.Brief;
const ReactRouter = require('react-router-dom');
const Link = ReactRouter.Link;
const dateFormat = require('dateformat');
const MAX = 5;

const SimpleList = ({result, history, favorites, onShowNavBar=f=>f, onAddFav=f=>f, onChangeUrl=f=>f}) => {
    return (
        <div>
            <div className="top_nav_bar">
                <NavBar mode="dark"
                        iconName="false"
                        leftContent={
                            <Icon
                                onClick={ (e)=> {
                                    e.preventDefault();
                                    //onShowNavBar(true);
                                    onChangeUrl('/');
                                    history.push('/');
                                }}
                                type="search-o-d"/>
                        }
                        rightContent={
                            <Icon
                                onClick={ (e)=> {
                                    e.preventDefault();
                                    onShowNavBar(true);
                                    onChangeUrl('/favorites');
                                    history.push('/favorites');
                                }}
                                type="star-o-d"/>
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
