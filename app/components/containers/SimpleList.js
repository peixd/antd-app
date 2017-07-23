import { connect } from 'react-redux';
import SimpleList from '../ui/SimpleList';
//import {addFav, removeFav} from '../../actions';

const mapStateToProps = (state, props) =>
    ({
        result: state.result
    })

const mapDispatchToProps = dispatch =>
    ({

    })

export default connect(mapStateToProps, mapDispatchToProps)(SimpleList);