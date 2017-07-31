import React from 'react';
import {NavBar, List, SwipeAction} from 'antd-mobile';

import PhoneItem from './PhoneItem';

const Item = List.Item;

const Favorites = ({favorites, onRemoveFav=f=>f}) => {
    return (
        <div>
            <div className="top_nav_bar">
                <NavBar mode="dark"
                        iconName="false"
                ><span>靓号</span>收藏
                </NavBar>
            </div>

            <div className="phone_list_container">
                <List>
                    {
                        favorites.reverse().map(function(item, index){
                            return (
                                <SwipeAction
                                    key={index}
                                    style={{ backgroundColor: 'gray' }}
                                    autoClose
                                    right={[
                                        {
                                            text: '删除',
                                            onPress: () => onRemoveFav(index),
                                            style: { backgroundColor: '#F4333C', color: 'white' },
                                        },
                                    ]}

                                >
                                    <Item
                                        key={index}
                                    >
                                        <PhoneItem item={item}/>
                                    </Item>
                                </SwipeAction>
                            );
                        })
                    }
                </List>
            </div>
        </div>
    )
}

export default Favorites;