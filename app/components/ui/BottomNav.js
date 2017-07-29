import React from 'react';
import PropTypes from 'prop-types'
import TabBar from 'antd-mobile/lib/tab-bar';
import Icon from 'antd-mobile/lib/icon';

class BottomNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
        };
    }

    render() {
        const {showNavBar, history, fetching, queryParams, generalQuery, favorites, newUrl} = this.props;
        console.log("props...", this.props);
        return (
            <div className="nav-container">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={!showNavBar}
                >

                    <TabBar.Item
                        icon={<Icon type={require('../../svgs/info-circle-o.svg')} />}
                        selectedIcon={<Icon type={require('../../svgs/info-circle.svg')} />}
                        title="政策"
                        key="政策"
                        dot
                        selected={ newUrl === '/info' ? true : false }
                        onPress={ () => {
                                this.props.onChangeUrl('/info');
                                history.push('/info');
                            }
                        }
                    />

                    <TabBar.Item
                        icon={<Icon type={require('../../svgs/search-o.svg')} />}
                        selectedIcon={<Icon type={require('../../svgs/search.svg')} />}
                        title="查询"
                        key="查询"
                        selected={newUrl === '/' ? true : false}
                        onPress={ () => {
                            this.props.onChangeUrl('/');
                                history.push('/');
                            }
                        }
                        data-seed="logId1"
                    />

                    <TabBar.Item
                        icon={<Icon type={require('../../svgs/star-o.svg')} />}
                        selectedIcon={<Icon type={require('../../svgs/star.svg')} />}
                        title="收藏"
                        key="收藏"
                        badge={favorites.length === 5 ? '满' : favorites.length}
                        selected={ newUrl === '/favorites' ? true : false }
                        onPress={ () => {
                            this.props.onChangeUrl('/favorites');
                                history.push('/favorites');
                            }
                        }
                    />

                </TabBar>

                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={showNavBar}
                >

                    <TabBar.Item
                        icon={
                            queryParams.currPage > 1　?
                            <Icon type={require('../../svgs/prev.svg')} /> :<div />
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
                            <Icon type={require('../../svgs/next.svg')} /> : <div />
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

BottomNav.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default BottomNav;