import React from 'react';
import PropTypes from 'prop-types'
import TabBar from 'antd-mobile/lib/tab-bar';
import Icon from 'antd-mobile/lib/icon';

class BottomNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 1,
            hidden: false,
            favoritesCnt: 0,
        };
        console.log('navbar', props);
    }

    render() {
        return (
            <div className="nav-container">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={!this.props.showNavBar}
                >

                    <TabBar.Item
                        icon={<Icon type={require('../../svgs/info-circle-o.svg')} />}
                        selectedIcon={<Icon type={require('../../svgs/info-circle.svg')} />}
                        title="政策"
                        key="政策"
                        dot
                        selected={this.state.selectedTab === 0}
                        onPress={() => {
                            this.setState({
                                selectedTab: 0,
                            }, () => this.props.history.push('/info'));
                        }}
                    />

                    <TabBar.Item
                        icon={<Icon type={require('../../svgs/search-o.svg')} />}
                        selectedIcon={<Icon type={require('../../svgs/search.svg')} />}
                        title="查询"
                        key="查询"
                        selected={this.state.selectedTab === 1}
                        onPress={() => {

                            this.setState({
                                selectedTab: 1,
                                favoritesCnt: 2
                            }, () => this.props.history.push('/'));
                        }}
                        data-seed="logId1"
                    />

                    <TabBar.Item
                        icon={<Icon type={require('../../svgs/star-o.svg')} />}
                        selectedIcon={<Icon type={require('../../svgs/star.svg')} />}
                        title="收藏"
                        key="收藏"
                        badge={this.state.favoritesCnt}
                        selected={this.state.selectedTab === 2}
                        onPress={() => {
                            this.setState({
                                selectedTab: 2,
                            }, () => this.props.history.push('/favorites'));
                        }}
                    />

                </TabBar>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.props.showNavBar}
                >
                    <TabBar.Item
                        icon={<Icon type={require('../../svgs/prev.svg')} />}
                        key="prev"
                        onPress={() => {
                            console.log('clicked');
                        }}
                    />

                    <TabBar.Item
                        icon={<div>5/11</div>}
                        key="page"
                        onPress={() => {
                            console.log('clicked');
                        }}
                    />

                    <TabBar.Item
                        icon={<Icon type={require('../../svgs/next.svg')} />}
                        key="next"
                        onPress={() => {
                            console.log('clicked');
                        }}
                    />

                </TabBar>
            </div>
        );
    }
}

BottomNav.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default BottomNav;