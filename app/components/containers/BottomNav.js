import { connect } from 'react-redux';
import BottomNav from '../ui/BottomNav';
import { changeCurrPage, changeResult } from '../../actions';

const api = require('../../utils/api');
const queryPhoneNumber = api.queryPhoneNumber;

const mapStateToProps = (state, props) => ({
    showNavBar: state.showNavBar,
    queryParams: state.queryParams,
    generalQuery: state.generalQuery
})

const mapDispatchToProps = dispatch => ({
    onChangePageQuery(queryParams, nextPage, generayQuery) {
        const currPage = nextPage ? queryParams.currPage  + 1 : queryParams.currPage - 1;
        const thisQueryParams = Object.assign({}, queryParams, {currPage});
        console.log("thisQueryParams", thisQueryParams);
        queryPhoneNumber(thisQueryParams, generayQuery)
            .then(
                res => {
                    dispatch(
                        changeResult(res.data)
                    )
                    dispatch(
                        changeCurrPage(currPage)
                    )
                }
            )
            .catch(err => console.log(err.message))

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);