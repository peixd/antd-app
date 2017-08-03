import React from 'react';
import {Icon, TabBar} from 'antd-mobile';

const MAX = 5;
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
                        icon={<Icon type={require('../../svgs/info-circle-o.svg')} />}
                        selectedIcon={<Icon type={require('../../svgs/info-circle.svg')} />}
                        title="政策"
                        key="政策"
                        dot
                        selected={ pathname === '/info' ? true : false }
                        onPress={ () => history.push('/info') }
                    />

                    <TabBar.Item
                        icon={<Icon type={require('../../svgs/search-o.svg')} />}
                        selectedIcon={<Icon type={require('../../svgs/search2.svg')} />}
                        title="查询"
                        key="查询"
                        selected={pathname === '/' ? true : false}
                        onPress={ () => history.push('/') }
                        data-seed="logId1"
                    />

                    <TabBar.Item
                        icon={<Icon type={require('../../svgs/star-o.svg')} />}
                        selectedIcon={<Icon type={require('../../svgs/star.svg')} />}
                        title="收藏"
                        key="收藏"
                        badge={favorites.length === MAX ? '满' : favorites.length}
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
                                <Icon type={require('../../svgs/prev.svg')} /> :<div />
                        }
                        key="prev"
                        onPress={() => {
                            if(!fetching && queryParams.currPage > 1)
                                this.props.onChangePageQuery(queryParams, false, generalQuery, favorites);
                        }}
                    />

                    <TabBar.Item
                        icon={<div>{queryParams.currPage}/{queryParams.totalPages}</div>}
                        key="page"
                    />

                    <TabBar.Item
                        icon={
                            queryParams.currPage != queryParams.totalPages ?
                                <Icon type={require('../../svgs/next.svg')} /> : <div />
                        }
                        key="next"
                        onPress={() => {
                            if(!fetching && queryParams.currPage != queryParams.totalPages)
                                this.props.onChangePageQuery(queryParams, true, generalQuery, favorites);
                        }}
                    />

                </TabBar>
            </div>
        );
    }
}

export default BottomNav;