import { connect } from 'react-redux';
import Routes from '../ui/Routes';
//import {addFav, removeFav} from '../../actions';
const ReactRouter = require('react-router-dom');
const withRouter = ReactRouter.withRouter;
const mapStateToProps = (state, props) =>
    ({
        showNavBar: state.showNavBar
    })

const mapDispatchToProps = dispatch =>
    ({

    })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
