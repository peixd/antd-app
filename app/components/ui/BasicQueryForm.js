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
import C from '../../constants';


const api = require('../../utils/api');
const queryPhoneNumber = api.queryPhoneNumber;
const queryPhoneNumberAndTotal = api.queryPhoneNumberAndTotal;

const ReactRouter = require('react-router-dom');
const Link = ReactRouter.Link;

const tailReg = [
    {label:'AA', value: 'AA'},
    {label:'AAA', value: 'AAA'},
    {label:'ABC', value: 'ABC'},
    {label:'AAAA', value: 'AAAA'},
    {label:'ABCD', value: 'ABCD'},
    {label:'ABCDE', value: 'ABCDE'},
    {label:'ABBA', value: 'ABBA'},
    {label:'ABAB', value: 'ABAB'},
    {label:'AAAAA', value: 'AAAAA'},
];

const headThree = [
    {label: '133', value: '133'},
    {label: '153', value: '153'},
    {label: '173', value: '173'},
    {label: '177', value: '177'},
    {label: '180', value: '180'},
    {label: '181', value: '181'},
    {label: '189', value: '189'},
];

class BasicQueryForm extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            bodyFour: null,
            headThree: [],
            tailFour: null,
            tailReg: [],
            phoneNumber: null,
            general_querying: false,
            advanced_querying: false,
        }
        this.queryPhoneNumberAndTotalFun = this.queryPhoneNumberAndTotalFun.bind(this);
        this.onExtraClickHandler = this.onExtraClickHandler.bind(this);
        this.advancedQueryHandler = this.advancedQueryHandler.bind(this);
    }

    //input params are queryParams, generalQuery: boolean
    queryPhoneNumberAndTotalFun(queryParams, generalQuery) {
        return queryPhoneNumberAndTotal(queryParams, generalQuery).then(
            ({phoneNumberList, total}) => {
                this.setState( {
                    general_querying: false,
                    advanced_querying: false
                });
                if(total <= 0) {
                    Toast.info("未查询到符合该条件靓号");
                } else {
                    // onResultChange的入参为查询结果,
                    // 查询参数对象 : (非generalQuery: false),
                    // {generalQuery, phoneNumber, headThree, bodyFour, tailFour, tailReg, currPage, pageSize}
                    const headThree = (this.state.headThree && this.state.headThree.length > 0) ? this.state.headThree[0] : null;
                    const tailReg = (this.state.tailReg && this.state.tailReg.length > 0) ? this.state.tailReg[0] : null;
                    const thisQueryParams = {
                        phoneNumber: this.state.phoneNumber,
                        headThree: headThree,
                        bodyFour: this.state.bodyFour,
                        tailFour: this.tailFour,
                        tailReg: tailReg,
                        currPage: 1,
                        pageSize: 10,
                        totalPages: Math.ceil(total / 10)
                    };

                    this.props.onResultChange(phoneNumberList, thisQueryParams, generalQuery);
                    this.props.history.replace('/show_result');
                    this.props.onShowNavBar(false);
                }

            }).catch(
                err => {
                    console.log(err.message);
                    Toast.fail(err.message);
                    this.setState( {
                        general_querying: false,
                        advanced_querying: false
                    });
                });
    }

    // 处理简易查询事件
    onExtraClickHandler() {
        if(this.state.phoneNumber && this.state.phoneNumber.length > 0) {
            // 开始查询
            this.setState({general_querying: true});

            // mock 数据查询, 最终查询到结果, 其形式为 {phonenumberArray, total}
            this.queryPhoneNumberAndTotalFun({"phoneNumber": this.state.phoneNumber, "currPage": 1, "pageSize": 10}, true);

        } else {
            // toast 提示
            this.setState({general_querying: false});
            Toast.info('号码输入不能为空!');
        }
    }

    // 高级查询事件
    advancedQueryHandler() {
        console.log("advanced query start...");
        if (this.state.bodyFour
            || (this.state.headThree && this.state.headThree.length > 0)
            || this.state.tailFour
            || (this.state.tailReg && this.state.tailReg.length > 0))
        {
            this.setState({advanced_querying: true});
            const headThree = (this.state.headThree && this.state.headThree.length > 0) ? this.state.headThree[0] : null;
            const tailReg = (this.state.tailReg && this.state.tailReg.length > 0) ? this.state.tailReg[0] : null;
            this.queryPhoneNumberAndTotalFun(
                {
                    "phoneNumber": this.state.phoneNumber,
                    "currPage": 1,
                    "pageSize": 10,
                    "headThree": headThree,
                    "tailReg": tailReg,
                    "bodyFour": this.state.bodyFour,
                    "tailFour": this.state.tailFour
                }, false);
        }
        else {
            Toast.info('输入信息为空!')
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
                        value={this.state.phoneNumber}
                        onChange={(phoneNumber) => this.setState({phoneNumber})}
                        extra={
                            <div className="general_query_div">
                                <div><Icon type={this.state.general_querying ? "loading" : "search"} /></div>
                                <div>查询</div>
                            </div>
                        }
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

                    <Picker
                        data={headThree}
                        cols={1}
                        {...getFieldProps('headThree')}
                        className="forss"
                        value={this.state.headThree}
                        onChange={(headThree)=>this.setState({headThree})}
                    >
                        <List.Item arrow="horizontal">号首3位(可不选)</List.Item>
                    </Picker>

                    <InputItem
                        type="money"
                        maxLength={4}
                        value={this.state.bodyFour}
                        clear
                        placeholder="可不填"
                        focused={this.state.focused}
                        onChange={(bodyFour) => this.setState({bodyFour})}
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
                        value={this.state.tailFour}
                        clear
                        placeholder="可不填"
                        focused={this.state.focused}
                        onChange={(tailFour) => this.setState({tailFour})}
                        onFocus={() => {
                            this.setState({
                                focused: false,
                            });
                        }}
                    >后4位
                    </InputItem>

                    <Picker
                        data={tailReg}
                        cols={1} {...getFieldProps('tailReg')}
                        value={this.state.tailReg}
                        onChange={(tailReg)=>this.setState({tailReg})}
                    >
                        <List.Item arrow="horizontal">选择靓号(如AAA)</List.Item>
                    </Picker>
                </List>

                <WhiteSpace size="xl"/>
                <Button
                    className="btn"
                    type="primary"
                    onClick={this.advancedQueryHandler}
                    /*style={{height: '0.7rem'}}*/
                    disabled={this.state.advanced_querying}
                    icon={this.state.advanced_querying ? "loading" : "search"}>
                    {this.state.advanced_querying ? "正在查询..." : "查询"}

                </Button>
            </div>
        );
    }
}

export default createForm()(BasicQueryForm);