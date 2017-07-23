import { connect } from 'react-redux';
import Routes from '../ui/Routes';
//import {addFav, removeFav} from '../../actions';

const mapStateToProps = (state, props) =>
    ({
        showNavBar: state.showNavBar
    })

const mapDispatchToProps = dispatch =>
    ({

    })

export default connect(mapStateToProps, mapDispatchToProps)(Routes);