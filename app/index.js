import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'antd/lib/date-picker';
import message from 'antd/lib/message';
import 'antd/lib/date-picker/style/css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({ date });
    }
    render() {
        return (
            <div>
                <DatePicker onChange={value => this.handleChange(value)} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));