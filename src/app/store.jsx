// Carry application ke state ko 
// In one application have only one store file
// It is a central store from where all components can access there state

import { configureStore } from "@reduxjs/toolkit"
import taskReducer from '../features/task/taskSlice'

export const store = configureStore({
   reducer:{
    task: taskReducer
   }
});
