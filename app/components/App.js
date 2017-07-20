import ReactDOM from 'react-dom';
import React from 'react';
import TabBar from 'antd-mobile/lib/tab-bar';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/tab-bar/style/css';
import 'antd-mobile/lib/icon/style/css';

/* eslint global-require: 0 */

class TabBarExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           hidden: !this.state.hidden,
                       });
                   }}
                >
                    点击切换 tab-bar 显示/隐藏
                </a>
            </div>
        );
    }

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    icon={<Icon type={require('./svgs/search-o.svg')} />}
                    selectedIcon={<Icon type={require('./svgs/search.svg')} />}
                    title="查询"
                    key="查询"

                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                    }}
                    data-seed="logId1"
                >
                    {this.renderContent('查询')}
                </TabBar.Item>

                <TabBar.Item
                    icon={<Icon type={require('./svgs/info-circle-o.svg')} />}
                    selectedIcon={<Icon type={require('./svgs/info-circle.svg')} />}
                    title="政策"
                    key="政策"
                    dot
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                    }}
                >
                    {this.renderContent('政策')}
                </TabBar.Item>

                <TabBar.Item
                    icon={<Icon type={require('./svgs/star-o.svg')} />}
                    selectedIcon={<Icon type={require('./svgs/star.svg')} />}
                    title="收藏"
                    key="收藏"
                    badge={1}
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'yellowTab',
                        });
                    }}
                >
                    {this.renderContent('收藏')}
                </TabBar.Item>

            </TabBar>
        );
    }
}

ReactDOM.render(<TabBarExample />, document.getElementById('app'));