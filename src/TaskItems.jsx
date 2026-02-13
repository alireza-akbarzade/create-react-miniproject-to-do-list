import React, { useContext } from 'react';
import TaskContext from './TaskContext';


const TaskItems = () => {
    const { taskItem, setTaskItem } = useContext(TaskContext)
    return (
        <ul className="list-group m-0 p-0 mt-2">
            {taskItem.map((item) => (
                <li className={`list-group-item d-flex justify-content-between ${item.done ? "list-group-item-success" : ""}`}>
                    {item.title}
                    <span>
                        {item.done ? (
                            <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"></i>
                        ) : (
                            <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"></i>
                        )}


                        <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
                    </span>
                </li>
            ))}




        </ul>
    )
}

export default TaskItems;