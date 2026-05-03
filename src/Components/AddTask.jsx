import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";

const AddTask = () => {

const [text,setText] =  useState('');

const dispatch = useDispatch();

const handleTask = (e) => {
setText(e.target.value);
}

const handleSubmit = (e) => {
e.preventDefault();
dispatch(addTask(text));
setText("");
}

   return(<>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter task" value={text} onChange={handleTask}></input>
          <br />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
       </>);
}

export default AddTask;
