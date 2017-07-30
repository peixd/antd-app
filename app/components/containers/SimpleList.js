import { connect } from 'react-redux';
import SimpleList from '../ui/SimpleList';
import {addFav, removeFav } from '../../actions';

const mapStateToProps = (state, props) => ({
    result: state.result,
    queryParams: state.queryParams,
    favorites: state.favorites,
})

const mapDispatchToProps = dispatch => ({
    onAddFav(data) {
        dispatch(
            addFav(data)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleList);