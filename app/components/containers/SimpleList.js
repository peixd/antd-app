import { connect } from 'react-redux';
import SimpleList from '../ui/SimpleList';
import {addFav, removeFav, showNavBar, changeUrl} from '../../actions';

const mapStateToProps = (state, props) => ({
    result: state.result,
    queryParams: state.queryParams,
    favorites: state.favorites,
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
    },
    onChangeUrl(data) {
        dispatch(
            changeUrl(data)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleList);