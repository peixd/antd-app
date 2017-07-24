import { connect } from 'react-redux';
import BottomNav from '../ui/BottomNav';
//import {addFav, removeFav} from '../../actions';

const mapStateToProps = (state, props) => ({
    showNavBar: state.showNavBar
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);