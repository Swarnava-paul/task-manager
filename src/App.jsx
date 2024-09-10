import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Suspense } from 'react'
const Task = React.lazy(()=>import('./components/Task'));
import { useRef } from 'react'

function App() {
  const [task,setTask] = useState([])
  const inputRef = useRef(null)
  const [priority,setPriority] = useState()
console.log(task);

  return (
    <>
    <div style={{paddingBottom:"30px"}}>
      Add Task
      <input ref={inputRef} type="text" />

      <select onChange={(e)=>{
        setPriority(e.target.value)
        
      }}>
        <option value="">Select Priority</option>
        <option value="high">high</option>
        <option value="low">low</option>
      </select>
      <button onClick={()=>{
       const array = [...task];

       array.unshift({name:[inputRef.current.value],priority:priority})
       setTask(array)
      }}>Add task</button>
    </div>
    <Suspense fallback={<>loading component...</>}>
     {
      task && task.map((i,index)=> (
        <Task key={index} task={task}
         setTask={setTask} index={index} 
         props={i}/>
      ))
     }
    </Suspense>
    </>
  )
}

export default App
