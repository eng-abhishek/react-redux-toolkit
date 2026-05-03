import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
 const {items, filters}  = useSelector(state => state.task);

  const filtered = (filters === 'completed' ? items.filter(task => task.completed) : items);

 console.log(filtered, ':filtered');

 return (<>
          <h1>Task List</h1>
          <ul>
            {filtered.map(task => (
              <TaskItem key={task.id} task={task}/>
            ))}
          </ul>
         </>);
}
export default TaskList;