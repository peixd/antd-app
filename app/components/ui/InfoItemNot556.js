import React from 'react';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/icon/style/css';
import '../../css/InfoItem.css';

class InfoItemNot556 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        const { level, ofr_charge, details, tail_desc } = this.props.item;
        return (
            <div className="main_container_info">
                <div className="info_item_container">
                    <div className="left_level">
                        <div>靓号等级 <span className="level">{level}</span></div>
                    </div>
                    <div className="right_info">
                        <div>套餐 <span className="ofr_charge">{ofr_charge}</span>
                        </div>
                    </div>
                    {
                        details ?
                                <Icon
                                onClick={ () => this.setState({show: !this.state.show}) }
                                className="icon_more_info"
                                type={ this.state.show ? "up" : "down"}/>:
                            <div style={{width: '0.44rem'}}/>
                    }
                </div>

                <div className="number_tail_div">

                    <div>尾数
                        {
                            tail_desc.map(function (value, index) {
                                return (
                                    <span key={index}
                                          className="number_tail">{value}</span>
                                );
                            })
                        }
                    </div>
                </div>
                {
                    details && this.state.show && <div className="more_info"><p>{details}</p></div>
                }
            </div>
        )
    }
}

export default InfoItemNot556;