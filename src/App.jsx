import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Suspense } from 'react'
const Task = React.lazy(()=>import('./components/Task'));

function App() {
  const [task,setTask] = useState([])
 
  return (
    <>
    <div style={{paddingBottom:"30px"}}>
      Add Task
      <input type="text" />
      <select>
        <option value="">Select Priority</option>
        <option value="high">high</option>
        <option value="low">low</option>
      </select>
      <button>Add task</button>
    </div>
    <Suspense fallback={<>loading component...</>}>
     {
      task && task.map((i,index)=> (
        <Task key={index}/>
      ))
     }
    </Suspense>
    </>
  )
}

export default App
