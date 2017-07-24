import React from 'react';
import 'antd-mobile/lib/tab-bar/style/css';
import 'antd-mobile/lib/icon/style/css';
import Info from './components/ui/Info';
import Favorites from './components/ui/Favorites';
import SimpleList from './components/containers/SimpleList';
import './css/App.css';
import BottomNav from './components/containers/BottomNav';
import BasicQueryForm from './components/containers/BasicQueryForm';

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const WithRouter = ReactRouter.withRouter;

const WithRouterBottomNav = WithRouter(BottomNav);

// 实现路由
const Routes = () =>
    (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={BasicQueryForm} />
                    <Route path='/info' component={Info} />
                    <Route path='/show_result' component={SimpleList} />
                    <Route path='/favorites' component={Favorites} />
                </Switch>
                <WithRouterBottomNav />
            </div>
        </Router>
    );

module.exports = Routes;