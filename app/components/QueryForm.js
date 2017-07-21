import React from 'react';
import PickerView from 'antd-mobile/lib/picker-view';
import 'antd-mobile/lib/picker-view/style/css';

const seasons = [
    [
        {
            label: '133',
            value: '133',
        },
        {
            label: '153',
            value: '153',
        },
        {
            label: '173',
            value: '173',
        },
        {
            label: '177',
            value: '177',
        },
        {
            label: '180',
            value: '180',
        },
        {
            label: '181',
            value: '181',
        },
        {
            label: '189',
            value: '189',
        },
    ]
];

class PrefixChooser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        console.log(value);
        this.setState({
            value,
        });
    }

    render() {
        return (
            <PickerView
                onChange={this.onChange}
                value={this.state.value}
                data={seasons}
                cascade={false}
            />
        );
    }
}

class QueryForm extends React.Component {
    render() {
        return (
          <PrefixChooser/>
        );
    }
}

export default QueryForm;
