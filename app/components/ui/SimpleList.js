import React from 'react';

import {Icon, NavBar, List} from 'antd-mobile';

import PhoneItems from './PhoneItems';
import '../../css/SimpleList.css';

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
                                <PhoneItems key={index} elem={ {item, index, favorites, onAddFav} }/>
                            );
                        })
                    }
                </List>
            </div>
        </div>
    );
}

export default SimpleList;
