import React from 'react';
import {Icon, Toast, List} from 'antd-mobile';
import PhoneItem from './PhoneItem';
import dateFormat from 'dateformat';

const MAX = 5;
const Item = List.Item;
const SEL = '../../svgs/favorites_selected.svg';
const UNSEL = '../../svgs/favorites-outline.svg';

class PhoneItems extends React.Component {
    constructor(props) {
        super(props);
        this.hasPhoneNumber = this.hasPhoneNumber.bind(this);
    }

    hasPhoneNumber(favorites, phoneNumber) {
        favorites.some( (elem,i,array) => {
            console.log(elem, array);
            return elem.PHONE_NUMBER === phoneNumber
        } )
    }

    render() {
        const {index, item, favorites, onAddFav} = this.props.elem;
        const contains = this.hasPhoneNumber(favorites, item.PHONE_NUMBER);

        return (
            <Item
                key={index}
                extra={<Icon
                    size="small"
                    style={{ color: 'red', alignSelf: 'flex-end' }}
                    type={contains ? require(URL) : require(UNSEL)}
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
                <PhoneItem item={item}/>
            </Item>
        );
    }
}

export default PhoneItems;
