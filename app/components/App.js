import React from 'react';
import PropTypes from 'prop-types'
import TabBar from 'antd-mobile/lib/tab-bar';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/tab-bar/style/css';
import 'antd-mobile/lib/icon/style/css';
import Search from './Search';
import Info from './Info';
import Favorites from './Favorites';

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const WithRouter = ReactRouter.withRouter;

class BottomNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 1,
            hidden: false,
            favoritesCnt: 0,
        };
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
                    icon={<Icon type={require('../svgs/info-circle-o.svg')} />}
                    selectedIcon={<Icon type={require('../svgs/info-circle.svg')} />}
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
                    icon={<Icon type={require('../svgs/search-o.svg')} />}
                    selectedIcon={<Icon type={require('../svgs/search.svg')} />}
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
                    icon={<Icon type={require('../svgs/star-o.svg')} />}
                    selectedIcon={<Icon type={require('../svgs/star.svg')} />}
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
        );
    }
}

BottomNav.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

const WithRouterBottomNav = WithRouter(BottomNav);

// 实现路由
class App extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Search} />
                        <Route path='/info' component={Info} />
                        <Route path='/favorites' component={Favorites} />
                    </Switch>
                    <WithRouterBottomNav />
                </div>
            </Router>
        );
    }
}

module.exports = App;