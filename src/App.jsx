import React from "react";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList"
import FilterTask from "./Components/FilterTask"

const App = () =>{

  return(
    <>
     <h1>React Redux Tool Kit </h1>
     <AddTask />
     <TaskList />
     <FilterTask />
    </>
  );
}

export default App;