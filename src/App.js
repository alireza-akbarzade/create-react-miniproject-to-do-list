import React, { useState } from 'react';
import TopForm from './TopForm';
import TaskItems from './TaskItems';
import TaskContext from './TaskContext';




const App = () => {
    const [taskItem, setTaskItem] = useState([
        {
            id: 1,
            title: "کار شماره 1",
            done: false
        },
         {
        
            id: 4,
            title: "کار شماره4",
            done: true
        },
        {
        
            id: 3,
            title: "کار شماره3",
            done: false
        },
    ])
    return (
        <div className="container w-100 h-100 p-3">
            <div className="row h-100 justify-content-center align-align-items-start">
                <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
                   <TaskContext.Provider  value={{taskItem, setTaskItem}}>
                    <TopForm />
                    <TaskItems />
                    </TaskContext.Provider>
                </div>
            </div>
        </div>
    )
}


export default App;
