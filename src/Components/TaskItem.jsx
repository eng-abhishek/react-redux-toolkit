import { useDispatch } from "react-redux";
import { toggleTask,deleteTask } from "../features/task/taskSlice";

const TaskItem = ({task}) => {
const dispatch = useDispatch();

return(<>
    <li className={task.completed ? "text-decoration-line-through":""}>{task.text}</li>
    <div className="d-flix">
        <button onClick={()=>dispatch(toggleTask(task.id))} className="btn btn-primary">{(task.completed) ? 'Undo' : 'Completed'}</button>
        &nbsp;
        <button onClick={()=>dispatch(deleteTask(task.id))} className="btn btn-danger">Delete</button>
    </div>
      </>);
}

export default TaskItem;