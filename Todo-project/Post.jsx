import React, { useState } from 'react'

const Post= () => {

    function handleChange(event) {
        setNewTask(event.target.value)
        console.log(newTask)
    }
    
    
    const [tasks, setTasks] = useState([
        {id:1,text:'go to gym'}, 
        {id:2, text:'do assignment'}
    ])

    const [newTask, setNewTask] = useState([''])

   function handleAdd() {
    if (newTask.trim() === '') return // prevent empty tasks

    // create a new task object
    const newTaskObj = {
      id: tasks.length + 1, // unique id //id=Date.now(),
      text: newTask
    }

    // update the tasks state (spread existing tasks + new one)
    setTasks([...tasks, newTaskObj])

    // clear input after adding
    setNewTask('')
  }

   function handleDelete(id){
     const updateTasks=tasks.filter(task => task.id !==id)
     setTasks(updateTasks)
   }


    return (
        <div>
            <h1>To-Do List</h1>
            <input type='text' placeholder='Add a new task...' value={newTask} onChange={handleChange}></input>
            <button onClick={handleAdd}>Add</button>
            <ul>{
                tasks.map((task, index) => {
                    return <li key={task.id}>
                        <input type='checkbox'></input>
                        <span>{task.text}</span>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                }
                )}
            </ul>
        </div>
    )
}

export default Post