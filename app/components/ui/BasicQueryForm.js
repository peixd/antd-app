import React from 'react';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style/css';
import InputItem from 'antd-mobile/lib/input-item';
import 'antd-mobile/lib/input-item/style/css';
import WhiteSpace from 'antd-mobile/lib/white-space';
import 'antd-mobile/lib/white-space/style/css';
import Button from 'antd-mobile/lib/button';
import 'antd-mobile/lib/button/style/css';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/icon/style/css';
import '../../css/QueryForm.css';
import createForm from 'rc-form/lib/createForm';
import Picker from 'antd-mobile/lib/picker';
import 'antd-mobile/lib/picker/style/css';
import Toast from 'antd-mobile/lib/toast';
import 'antd-mobile/lib/toast/style/css';

import NavBar from 'antd-mobile/lib/nav-bar';
import 'antd-mobile/lib/nav-bar/style/css';

const ReactRouter = require('react-router-dom');
const Link = ReactRouter.Link;

const flags = [
    {label:'AA', value: 'AA'},
    {label:'AAA', value: 'AAA'},
    {label:'ABC', value: 'ABC'},
    {label:'AAAA', value: 'AAAA'},
    {label:'ABCD', value: 'ABCD'},
    {label:'ABBA', value: 'ABBA'},
    {label:'AAAAA', value: 'AAAAA'},
];

const prefix = [
    {label: 133, value: 133},
    {label: 153, value: 153},
    {label: 173, value: 173},
    {label: 177, value: 177},
    {label: 180, value: 180},
    {label: 181, value: 181},
    {label: 189, value: 189},
];

class BasicQueryForm extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            phoneNum: null,
            prefix: null,
            middle: null,
            tail: null,
            general_querying: false,
            advanced_querying: false,
        }
        this.onExtraClickHandler = this.onExtraClickHandler.bind(this);
    }

    // 处理简易查询事件
    onExtraClickHandler() {
        console.log('clicked');
        if(this.state.phoneNum && this.state.phoneNum.length > 0) {
            // 开始查询
            console.log('query start');
            this.setState({general_querying: true});

            // mock 数据查询, 最终查询到结果
            this.setState({init: true});
        } else {
            // toast 提示
            this.setState({general_querying: false});
            Toast.info('号码输入不能为空!');
        }
    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <NavBar mode="dark"
                        iconName="false"
                >靓号查询</NavBar>
                <List renderHeader={() =>
                    <div style={{fontWeight:'bold',color:'#108ee9'}}>
                        简易查询
                    </div>
                }>
                    <InputItem
                        type="money"
                        maxLength={11}
                        disabled={this.state.general_querying}
                        value={this.state.phoneNum}
                        onChange={(phoneNum) => this.setState({phoneNum})}
                        extra={
                            <div className="general_query_div">
                                <div><Icon type={this.state.general_querying ? "loading" : "search"} /></div>
                                <div>查询</div>
                            </div>
                        }
                        /*extra={<Button size="small"
                                       style={{padding:0.1rem}}
                                       className="btn"
                                       icon={this.state.general_querying ? "loading" : "search"}>查询
                                </Button>}*/
                        onExtraClick={this.onExtraClickHandler}
                        placeholder="11位以内号码">
                        手机号码
                    </InputItem>
                </List>

                <WhiteSpace size="xl"/>

                <List renderHeader={() =>
                    <div style={{fontWeight:'bold',color:'#108ee9'}}>
                        高级查询
                    </div>
                }>

                    <Picker data={prefix} cols={1} {...getFieldProps('prefixThree')} className="forss">
                        <List.Item arrow="horizontal">号首3位(可不选)</List.Item>
                    </Picker>

                    <InputItem
                        type="money"
                        maxLength={4}
                        value={this.state.middle}
                        clear
                        placeholder="可不填"
                        focused={this.state.focused}
                        onChange={(middle) => this.setState({middle})}
                        onFocus={() => {
                            this.setState({
                                focused: false,
                            });
                        }}
                    >中间4位
                    </InputItem>

                    <InputItem
                        type="money"
                        maxLength={4}
                        value={this.state.tail}
                        clear
                        placeholder="可不填"
                        focused={this.state.focused}
                        onChange={(tail) => this.setState({tail})}
                        onFocus={() => {
                            this.setState({
                                focused: false,
                            });
                        }}
                    >后4位
                    </InputItem>

                    <Picker data={flags} cols={1} {...getFieldProps('tailFlag')} className="forss">
                        <List.Item arrow="horizontal">选择靓号(如AAA)</List.Item>
                    </Picker>
                </List>

                <WhiteSpace size="xl"/>
                <Button
                    className="btn"
                    type="primary"
                    style={{height: '0.7rem'}}
                    disabled={this.state.advanced_querying}
                    icon={this.state.advanced_querying ? "loading" : "search"}>
                    {this.state.advanced_querying ? "正在查询..." : "查询"}
                </Button>
            </div>
        );
    }
}

export default createForm()(BasicQueryForm);