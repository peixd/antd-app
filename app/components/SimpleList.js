import React from 'react';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style/css';
import '../css/SimpleList.css'
const Item = List.Item;
const Brief = Item.Brief;

const data = [
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
];

class SimpleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        }
    }

    render() {
        return (
            <div>
                <List>
                    {
                        data.map(function(item, index){
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
            </div>);
    }
}

export default SimpleList;
