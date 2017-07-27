import React from 'react';
import NavBar from 'antd-mobile/lib/nav-bar';
import Tabs from 'antd-mobile/lib/tabs';
import 'antd-mobile/lib/tabs/style/css';
import WhiteSpace from 'antd-mobile/lib/white-space';
import 'antd-mobile/lib/white-space/style/css';

import 'antd-mobile/lib/nav-bar/style/css';
import '../../css/Info.css';

const TabPane = Tabs.TabPane;

const Info = (policy_556, policy_not_556) => {
    console.log("policy_556", policy_556);
    return (
        <div>
            <div className="top_nav_bar">
                <NavBar
                    mode="dark"
                    iconName="false"
                >靓号政策
                </NavBar>
            </div>

            <div className="info_container">
                <Tabs defaultActiveKey="2" >
                    <TabPane tab="0556号段" key="1">
                        <div style={{ display: 'flex', flexFlow: 'column wrap', flex: 'space-around', height:'100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <div>Content of First Tab</div>
                        </div>
                    </TabPane>
                    <TabPane tab="非0556号段" key="2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                            Content of Second Tab
                        </div>
                    </TabPane>
                </Tabs>
                <WhiteSpace />
            </div>
        </div>
    );
}

export default Info;