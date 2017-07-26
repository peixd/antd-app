import React from 'react';
import PropTypes from 'prop-types'
import TabBar from 'antd-mobile/lib/tab-bar';
import Icon from 'antd-mobile/lib/icon';

class BottomNav extends React.Component {

    constructor(props) {
        super(props);
        console.log('bottomnav', props)
        this.state = {
            selectedTab: 1,
            hidden: false,
            favoritesCnt: 0,
        };
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
                            }, (e) => {e.preventDefault(); this.props.history.push('/favorites') });
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
                        icon={
                            this.props.queryParams.currPage > 1　?
                            <Icon type={require('../../svgs/prev.svg')} /> :<div />
                        }
                        key="prev"
                        onPress={() => {
                            this.props.onChangePageQuery(this.props.queryParams, false, this.props.generalQuery);
                        }}
                    />

                    <TabBar.Item
                        icon={<div>{this.props.queryParams.currPage}/{this.props.queryParams.totalPages}</div>}
                        key="page"
                    />


                    <TabBar.Item
                        icon={
                            this.props.queryParams.currPage != this.props.queryParams.totalPages ?
                            <Icon type={require('../../svgs/next.svg')} /> : <div />
                        }
                        key="next"
                        onPress={() => {
                            this.props.onChangePageQuery(this.props.queryParams, true, this.props.generalQuery);
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