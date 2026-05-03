import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/task/taskSlice";

const FilterTask = () => {
   const filters = useSelector(state => state.task.filters);
   const dispatch = useDispatch();

   return(<>
   <div className="d-flix">
         <button onClick={() => dispatch(setFilter('all'))} className={`btn btn-${(filters == "all" ? "success" : "secondary")}`}>All</button>
         &nbsp;
         <button onClick={() => dispatch(setFilter('completed'))} className={`btn btn-${(filters == "completed" ? "success" : "secondary")}`}>Completed</button>
    </div>
          </>);
}

export default FilterTask;