import React from 'react';

import { NavBar, Tabs, List } from 'antd-mobile';

import '../../css/Info.css';
import policy_556 from '../../model/policy_for_0556';
import policy_not_556 from '../../model/policy_for_not_0556';

import InfoItemNot556 from './InfoItemNot556';
import InfoItem556 from './InfoItem556';

const desc556 = policy_556.desc;
const items556 = policy_556.items;
const desc_not556 = policy_not_556.desc;
const items_not556 = policy_not_556.items;

const TabPane = Tabs.TabPane;
const Item = List.Item;

const Info = () => {
    return (
        <div>
            <div className="top_nav_bar">
                <NavBar mode="dark"
                        iconName="false"
                >靓号政策
                </NavBar>
            </div>
            <div className="info_container">
                <Tabs defaultActiveKey="1" animated={false} swipeable={false}>
                    <TabPane tab={<div className="tab_pane">非0556号段</div>} key="1">
                        <List
                            renderHeader={() => (
                                <div className="header_div">
                                    <ul className="info_list_header">
                                        {
                                            desc_not556.map(function (item, index) {
                                                return (
                                                    <li key={index}>
                                                        {item}
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            )}
                        >
                            {
                                items_not556.map(function (item, index) {
                                    return (
                                        <Item key={index} >
                                            <InfoItemNot556 item={item} />
                                        </Item>
                                    );
                                })
                            }

                        </List>
                    </TabPane>
                    <TabPane tab={<div className="tab_pane">0556号段</div>} key="2">
                        <List
                            renderHeader={() => (
                                <div className="header_div">
                                    <ul className="info_list_header">
                                        {
                                            desc556.map(function (item, index) {
                                                return (
                                                    <li key={index}>
                                                        {item}
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            )}
                        >
                            {
                                items556.map(function (item, index) {
                                    return (
                                        <Item key={index}>
                                            <InfoItem556 item={item} />
                                        </Item>
                                    );
                                })
                            }

                        </List>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Info;