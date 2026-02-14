import React, { useContext, useState } from 'react';
import TaskContext from './TaskContext';

const TopForm = () => {

    const [task, setTask] = useState("")


    const { taskItem, setTaskItem } = useContext(TaskContext)

    const submitHandler = (event) => {
        event.preventDefault()

        setTaskItem([...taskItem, { id: Math.random(), title: task, done: false }])
        setTask("")



    }

    return (
        <>
            <h4 className="text-center text-info text_shdow">به to do خوش اومدید</h4>
            <form onSubmit={submitHandler}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" value={task} onChange={(event) => setTask(event.target.value)} />
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;