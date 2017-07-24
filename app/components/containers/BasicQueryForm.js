import { connect } from 'react-redux';
import BasicQueryForm from '../ui/BasicQueryForm';
import {addFav, removeFav} from '../../actions';

const mapStateToProps = (state, props) => {
    console.log('state...', state)
    console.log('props...', props)
    return {}
}

const mapDispatchToProps = dispatch => ({
    onGeneralQuery(phoneNum) {
        dispatch(generyQuery(phoneNum))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BasicQueryForm);