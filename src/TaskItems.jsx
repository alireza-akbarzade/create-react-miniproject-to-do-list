import React, { useContext } from 'react';
import TaskContext from './TaskContext';


const TaskItems = () => {
    const { taskItem, setTaskItem } = useContext(TaskContext)

    const changeIcon = (id) => {
        let newtask = [...taskItem]
        newtask.forEach(task => {
            if (task.id === id) {
                task.done = !task.done
            }
            setTaskItem(newtask)
        })
    }
    const DeleteHandler = (id) => {
        let newtask = taskItem.filter(task=>task.id !==id)
            setTaskItem(newtask)


    }
{
    if(taskItem.length){
        return (
        
        <ul className="list-group m-0 p-0 mt-2">
            {taskItem.map((item) => (
                <li className={`list-group-item d-flex justify-content-between ${item.done ? "list-group-item-success" : ""}`}>
                    {item.title}
                    <span>
                        {item.done ? (
                            <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow" onClick={() => changeIcon(item.id)}></i>
                        ) : (
                            <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow" onClick={() => changeIcon(item.id)}></i>
                        )}


                        <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow" onClick={() => {
                            DeleteHandler(item.id)
                        }}></i>
                    </span>
                </li>
            ))}




        </ul>
    )
    }else {
        return (
             <div className='mt-2  text-danger' >
    <h4>هیچ کاری برای انجام دادن وجود ندارد . . . </h4>
    </div>
        )
   
    }
}
    
}

export default TaskItems;