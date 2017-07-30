import React from 'react';
import TabBar from 'antd-mobile/lib/tab-bar';
import Icon from 'antd-mobile/lib/icon';

class BottomNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {history, fetching, queryParams, generalQuery, favorites} = this.props;
        const pathname = this.props.location ? this.props.location.pathname : '/';

        return (
            <div className="nav-container">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={pathname === '/show_result'}
                >

                    <TabBar.Item
                        icon={<Icon type="info-circle-o-d" />}
                        selectedIcon={<Icon type="info-circle-d" />}
                        title="政策"
                        key="政策"
                        dot
                        selected={ pathname === '/info' ? true : false }
                        onPress={ () => {
                                history.push('/info');
                            }
                        }
                    />

                    <TabBar.Item
                        icon={<Icon type="search-o-d" />}
                        selectedIcon={<Icon type="search-d" />}
                        title="查询"
                        key="查询"
                        selected={pathname === '/' ? true : false}
                        onPress={ () => history.push('/') }
                        data-seed="logId1"
                    />

                    <TabBar.Item
                        icon={<Icon type="star-o-d" />}
                        selectedIcon={<Icon type="star-d" />}
                        title="收藏"
                        key="收藏"
                        badge={favorites.length === 5 ? '满' : favorites.length}
                        selected={ pathname === '/favorites' ? true : false }
                        onPress={ () => history.push('/favorites') }
                    />

                </TabBar>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={pathname !== '/show_result'}
                >

                    <TabBar.Item
                        icon={
                            queryParams.currPage > 1　?
                            <Icon type="prev-d" /> :<div />
                        }
                        key="prev"
                        onPress={() => {
                            if(!fetching && queryParams.currPage > 1)
                                this.props.onChangePageQuery(queryParams, false, generalQuery);
                        }}
                    />

                    <TabBar.Item
                        icon={<div>{queryParams.currPage}/{queryParams.totalPages}</div>}
                        key="page"
                    />

                    <TabBar.Item
                        icon={
                            queryParams.currPage != queryParams.totalPages ?
                            <Icon type="next-d" /> : <div />
                        }
                        key="next"
                        onPress={() => {
                            if(!fetching && queryParams.currPage != queryParams.totalPages)
                                this.props.onChangePageQuery(queryParams, true, generalQuery);
                        }}
                    />

                </TabBar>
            </div>
        );
    }
}

export default BottomNav;