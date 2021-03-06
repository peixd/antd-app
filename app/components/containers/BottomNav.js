import { connect } from 'react-redux';
import BottomNav from '../ui/BottomNav';
import {Toast} from 'antd-mobile';
import {
    changeCurrPage,
    changeResult,
    cancelFetching,
    fetching }
    from '../../actions';
const api = require('../../utils/api');
const queryPhoneNumber = api.queryPhoneNumber;

const mapStateToProps = (state, props) => ({
    queryParams: state.queryParams,
    generalQuery: state.generalQuery,
    fetching: state.fetching,
    favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({

    onChangePageQuery(queryParams, nextPage, generalQuery, favorites) {
        const currPage = nextPage ? queryParams.currPage  + 1 : queryParams.currPage - 1;
        const thisQueryParams = Object.assign({}, queryParams, {currPage});
        Toast.loading('查询中...', 10);
        dispatch(
            fetching()
        )

        queryPhoneNumber(thisQueryParams, generalQuery)
            .then(
                res => {
                    // 判断结果中是否有号码已经被收藏
                    const data = res.data;
                    data.map(item =>
                        (item.hasFav = favorites.some( elem =>
                            item.PHONE_NUMBER === elem.PHONE_NUMBER)))

                    dispatch(
                        changeResult(data)
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