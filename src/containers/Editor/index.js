import { connect } from 'react-redux'
import Editor from '../../components/Editor'
import {addTask, deleteTask, updateTask} from "../../actions";


const mapStateToProps = (state) => ({
    length: state.dataset.data.length,
    tasks: state.dataset.data
});

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: () => dispatch(addTask()),
        deleteTask: () => dispatch(deleteTask()),
        updateTask: () => dispatch(updateTask())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Editor);