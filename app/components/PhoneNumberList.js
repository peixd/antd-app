import React from 'react';
import ListView from 'antd-mobile/lib/list-view';
import '../css/PhoneNubmerList.css'
/***
* phoneNumber : 177055566666
* statusName: 启用未激活
* prePnLevelId: 10
* pnLevelId: 10
* realPnLowPrice: 889
* realPreStorePrice: 5000
* name: 0556号段专属号池
**************************/

function MyBody(props) {
    return (
        <div className="am-list-body my-body">
            <span style={{ display: 'none' }}>you can custom body wrap element</span>
            {props.children}
        </div>
    );
}

const data = [
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
    {
        phoneNumber: '17705566666',
        statusName: '启用未激活',
        prePnLevelId: 10,
        pnLevelId: 10,
        realPnLowPrice: 889,
        realPreStorePrice: 5000,
        name: '0556号段专属号池'
    },
];
let index = data.length - 1;

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

class PhoneNumberList extends React.Component {
    constructor(props) {
        super(props);

        // comment by simpleasABC.
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.dataBlob = {};
        this.sectionIDs = [];
        this.rowIDs = [];
        this.genData = (pIndex = 0) => {
            for (let i = 0; i < NUM_SECTIONS; i++) {
                const ii = (pIndex * NUM_SECTIONS) + i;
                const sectionName = `Section ${ii}`;
                this.sectionIDs.push(sectionName);
                this.dataBlob[sectionName] = sectionName;
                this.rowIDs[ii] = [];

                for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
                    const rowName = `S${ii}, R${jj}`;
                    this.rowIDs[ii].push(rowName);
                    this.dataBlob[rowName] = rowName;
                }
            }
            // new object ref
            this.sectionIDs = [].concat(this.sectionIDs);
            this.rowIDs = [].concat(this.rowIDs);
        };

        this.state = {
            dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
            isLoading: true,
        };

        /*this.state = {
            dataSource: data,
            idLoading: true
        };*/
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.refs.lv.refs.listview.scrollTo(0, 120), 800); // also work
        // setTimeout(() => this.refs.lv.scrollTo(0, 120), 800); // recommend usage

        // simulate initial Ajax

        // comment by simpleasABC
        /*setTimeout(() => {
            this.genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
                isLoading: false,
            });
        }, 600);*/
        this.setState({
            dataSource: data,
            isLoading: false,
        });
    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
    //     });
    //   }
    // }

    onEndReached(event) {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
                isLoading: false,
            });
        }, 1000);
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`}
                 style={{
                     backgroundColor: '#F5F5F9',
                     height: 8,
                     borderTop: '1px solid #ECECED',
                     borderBottom: '1px solid #ECECED',
                 }}
            />
        );
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} className="phone_number_item_container">
                    {/*<div className="row-title">{obj.title}</div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '0.3rem 0' }}>
                        <img style={{ height: '1.28rem', marginRight: '0.3rem' }} src={obj.img} alt="icon" />
                        <div className="row-text">
                            <div style={{ marginBottom: '0.16rem', fontWeight: 'bold' }}>{obj.des}</div>
                            <div><span style={{ fontSize: '0.6rem', color: '#FF6E27' }}>35</span>¥</div>
                        </div>
                    </div>*/}
                    <div className='phone_number_info_item'>
                        <div className='phone_number'>{data.phoneNumber}</div>
                        <div className='phone_number_details'>
                            <div>状态: {data.statusName}</div>
                            <div>号池: {data.name}</div>
                            <div>等级/原等级: {data.pnLevelId}/{data.prePnLevelId}</div>
                        </div>
                    </div>
                    <div className='phone_number_price_details'>
                        <div>保底:<span className='font_style'>{data.realPnLowPrice}</span>元</div>
                        <div>预存:<span className='font_style'>{data.realPreStorePrice}</span>元</div>
                    </div>
                </div>
            );
        };

        return (<div style={{ margin: '0 auto', width: '96%' }}>
            <ListView ref="lv"
                      dataSource={this.state.dataSource}
                      renderHeader={() => <span>header</span>}
                      renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                          {this.state.isLoading ? 'Loading...' : 'Loaded'}
                      </div>)}
                      renderSectionHeader={sectionData => (
                          <div>{`Task ${sectionData.split(' ')[1]}`}</div>
                      )}
                      renderBodyComponent={() => <MyBody />}
                      renderRow={row}
                      renderSeparator={separator}
                      className="fortest"
                      style={{
                          height: document.documentElement.clientHeight * 3 / 4,
                          overflow: 'auto',
                          border: '1px solid #ddd',
                          margin: '0.1rem 0',
                      }}
                      pageSize={4}
                      onScroll={() => { console.log('scroll'); }}
                      scrollRenderAheadDistance={500}
                      scrollEventThrottle={200}
                      onEndReached={this.onEndReached}
                      onEndReachedThreshold={10}
            />
        </div>);
    }
}

export default PhoneNumberList;
