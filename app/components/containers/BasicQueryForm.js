import { connect } from 'react-redux';
import BasicQueryForm from '../ui/BasicQueryForm';
import {changeResult, showNavBar, changeQueryParams, changeGeneralQuery} from '../../actions';

const mapStateToProps = (state, props) => ({
    queryParams: state.queryParams,
    generalQuery: state.generalQuery
})

const mapDispatchToProps = dispatch => ({

    onResultChange(data, queryParams, generalQuery) {
        dispatch(
            changeResult(data)
        )
        dispatch(
            changeQueryParams(queryParams)
        )
        dispatch(
            changeGeneralQuery(generalQuery)
        )
    },

    onShowNavBar(data) {
        dispatch(
            showNavBar(data)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(BasicQueryForm);