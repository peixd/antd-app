import React from 'react';
import {Icon, Toast, List} from 'antd-mobile';
import PhoneItem from './PhoneItem';
import dateFormat from 'dateformat';

const MAX = 5;
const Item = List.Item;

class PhoneItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starClicked: false,
        }
    }

    render() {
        const {index, item, favorites, onAddFav} = this.props.elem;
        return (
            <Item
                key={index}
                extra={<Icon
                    size="small"
                    style={{ color: 'red', alignSelf: 'flex-end' }}
                    type={require(this.state.starClicked ? '../../svgs/favorites_selected.svg' : '../../svgs/favorites-outline.svg')}
                    onClick={ (e) => {
                        e.preventDefault();
                        if(favorites.length === MAX)
                            return Toast.fail("收藏满", 2)
                        const newItem = Object.assign({}, item);
                        newItem.date = dateFormat(new Date(), 'yy-mm-dd');
                        onAddFav(newItem);
                        Toast.success("收藏成功", 1);
                        this.setState({starClicked: true});
                    } } />}
            >
                <PhoneItem item={item}/>
            </Item>
        );
    }
}

export default PhoneItems;
