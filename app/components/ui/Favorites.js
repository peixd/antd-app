import NavBar from 'antd-mobile/lib/nav-bar';
import 'antd-mobile/lib/nav-bar/style/css';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style/css';
import SwipeAction from 'antd-mobile/lib/swipe-action';
import 'antd-mobile/lib/swipe-action/style/css';

import PhoneItem from './PhoneItem';

const Item = List.Item;

const Favorites = ({favorites}) => {
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
                                            text: '取消',
                                            style: { backgroundColor: '#ddd', color: 'white' },
                                        },
                                        {
                                            text: '删除',
                                            onPress: () => props.onRemoveFav(index),
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