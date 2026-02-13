import { createContext } from "react";

const TaskContext = createContext({
    taskItem: [], 
    setTaskItem :() => { },
})

export default TaskContext