import React from 'react';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style/css';
import '../../css/SimpleList.css';
import NavBar from 'antd-mobile/lib/nav-bar';
import 'antd-mobile/lib/nav-bar/style/css';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/icon/style/css';
import PhoneItem from './PhoneItem';

const Item = List.Item;
const Brief = Item.Brief;
const ReactRouter = require('react-router-dom');
const Link = ReactRouter.Link;

const SimpleList = ({result, history, onShowNavBar=f=>f, onAddFav=f=>f}) => {
    return (
        <div>
            <div className="top_nav_bar">
                <NavBar mode="dark"
                        iconName="false"
                        leftContent={
                            <Link to="/"><Icon type="search"/></Link>
                        }
                        rightContent={
                            <Link to="/favorites">
                                <Icon
                                    onClick={ (e)=> {
                                        e.preventDefault();
                                        onShowNavBar(true);
                                        history.push('/favorites');
                                    }}
                                    type={require('../../svgs/star-o.svg')}/></Link>
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
                                        type={require('../../svgs/star-o.svg')}
                                        onClick={ (e) => {
                                            e.preventDefault();
                                            const newItem = item;
                                            newItem.date = new Date();
                                            onAddFav(newItem)} } />}
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
