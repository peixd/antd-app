import { connect } from 'react-redux';
import SimpleList from '../ui/SimpleList';
import {addFav, removeFav, showNavBar} from '../../actions';

const mapStateToProps = (state, props) => ({
    result: state.result,
    queryParams: state.queryParams
})

const mapDispatchToProps = dispatch => ({
    onShowNavBar(data) {
        dispatch(
            showNavBar(data)
        )
    },
    onAddFav(data) {
        dispatch(
            addFav(data)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleList);