import { connect } from 'react-redux';
import Favorites from '../ui/Favorites';
import {removeFav} from '../../actions';

const mapStateToProps = (state, props) => ({
    favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({

    onRemoveFav(data) {
        dispatch(
            removeFav(data)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);