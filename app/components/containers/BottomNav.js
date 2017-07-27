import { connect } from 'react-redux';
import BottomNav from '../ui/BottomNav';
import { changeCurrPage, changeResult, cancelFetching, fetching } from '../../actions';
import Toast from 'antd-mobile/lib/toast';
import 'antd-mobile/lib/toast/style/css';
const api = require('../../utils/api');
const queryPhoneNumber = api.queryPhoneNumber;

const mapStateToProps = (state, props) => ({
    showNavBar: state.showNavBar,
    queryParams: state.queryParams,
    generalQuery: state.generalQuery,
    fetching: state.fetching,
})

const mapDispatchToProps = dispatch => ({
    onChangePageQuery(queryParams, nextPage, generalQuery) {
        const currPage = nextPage ? queryParams.currPage  + 1 : queryParams.currPage - 1;
        const thisQueryParams = Object.assign({}, queryParams, {currPage});
        console.log("thisQueryParams", thisQueryParams);
        Toast.loading('查询中...', 10);
        dispatch(
            fetching()
        )

        queryPhoneNumber(thisQueryParams, generalQuery)
            .then(
                res => {
                    dispatch(
                        changeResult(res.data)
                    )
                    dispatch(
                        changeCurrPage(currPage)
                    )
                    dispatch(
                        cancelFetching()
                    )
                    Toast.hide();
                }
            )
            .catch(err => {
                Toast.hide();
                Toast.fail(err.message);
                dispatch(
                    cancelFetching()
                )
            })

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);