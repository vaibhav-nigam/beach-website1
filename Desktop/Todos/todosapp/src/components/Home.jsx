import React, { useState, useEffect } from 'react'
import Task from './Task'

const Home = () => {

  const initialArr=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks,setTasks] = useState(initialArr);
  const[title,setTitle] = useState("");
  const[description,setDescription] = useState("");
console.log(title,description);
  const submitHandler = (e) =>{
    e.preventDefault();

    setTasks([...tasks,{title,description},]);
    console.log(tasks);
    setTitle("");
    setDescription("");


  }; 
  const deleteTask = (index)=>{
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;

    })

    console.log(filteredArr);
    setTasks(filteredArr);
  }

  useEffect(() => {
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
  }, [tasks])
  
    
  return (
    <div className='container'>
        <h1>DAILY GOALS</h1>
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>

            <button type='submit' >ADD</button>
        </form>

        {tasks.map((item,index)=>(
          <Task 
          key={index} 
          title={item.title} 
          description={item.description}
          deleteTask={deleteTask}
          index={index}
          />
        ))}
        </div>
  )
}

export default Home