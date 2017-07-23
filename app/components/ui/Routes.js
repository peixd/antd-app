import React from 'react';
import 'antd-mobile/lib/tab-bar/style/css';
import 'antd-mobile/lib/icon/style/css';
import Info from './Info';
import Favorites from './Favorites';
import QueryForm from './QueryForm';
import SimpleList from '../containers/SimpleList';
import '../../css/App.css';
import BottomNav from './BottomNav';
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const WithRouter = ReactRouter.withRouter;

//const WithRouterBottomNav = WithRouter(BottomNav);

// 实现路由
const Routes = ({showNavBar}) =>
    (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={SimpleList} />
                    <Route path='/info' component={QueryForm} />
                    <Route path='/favorites' component={Favorites} />
                </Switch>
                {/*<WithRouterBottomNav />*/}
                <BottomNav />
            </div>
        </Router>
    );

module.exports = Routes;