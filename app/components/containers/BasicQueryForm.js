import { connect } from 'react-redux';
import BasicQueryForm from '../ui/BasicQueryForm';
import {changeResult, changeQueryParams, changeGeneralQuery} from '../../actions';

const mapStateToProps = (state, props) => ({
    queryParams: state.queryParams,
    generalQuery: state.generalQuery,
    favorites: state.favorites
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicQueryForm);