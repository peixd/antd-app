import React from 'react';
import {Icon} from 'antd-mobile';
import '../../css/InfoItem.css';

class InfoItem556 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        const { level, ofr_charge, prerequisite, tail_desc } = this.props.item;
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
                        tail_desc ?
                            <Icon
                                onClick={ () => this.setState({show: !this.state.show}) }
                                className="icon_more_info"
                                type={ this.state.show ? "up" : "down"}/>:
                            <div style={{width: '0.44rem'}}/>
                    }
                </div>

                <div className="number_tail_div">
                    <div>预存要求: {prerequisite}</div>
                </div>

                {
                    tail_desc && this.state.show && <div className="more_info_div"><p>{tail_desc}</p></div>
                }
            </div>
        )
    }
}

export default InfoItem556;