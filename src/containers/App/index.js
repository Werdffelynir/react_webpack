import { connect } from 'react-redux';
import App from '../../components/App';


const mapStateToProps = (state) => ({
    config: state.config,
});

export default connect(mapStateToProps)(App);