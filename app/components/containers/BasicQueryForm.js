import { connect } from 'react-redux';
import BasicQueryForm from '../ui/BasicQueryForm';
import {addFav, removeFav, changeResult} from '../../actions';

const mapStateToProps = (state, props) => {

}

const mapDispatchToProps = dispatch => ({
    onResultChange(data) {
        dispatch(
            changeResult(data)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicQueryForm);