import NavBar from 'antd-mobile/lib/nav-bar';
import 'antd-mobile/lib/nav-bar/style/css';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style/css';

import PhoneItem from './PhoneItem';

const Item = List.Item;

const Favorites = (props) => {
    const favorites = props.favorites;
    console.log('props....', props);
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
                        favorites.map(function(item, index){
                            return (
                                <Item
                                    key={index}
                                >
                                    <PhoneItem item={item}/>
                                </Item>);
                        })
                    }
                </List>
            </div>
        </div>
    )
}

export default Favorites;