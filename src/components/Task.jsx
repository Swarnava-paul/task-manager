import { useState } from "react";
const Task = ({props,index,task,setTask}) => {
    const [edit,setEdit] = useState(false)
    const {name,priority} = props;
    const [taskValue,setTaskValue] = useState(name)

    const handleDelete = () => {
        const taskArray = [...task];
        const remainings = taskArray.filter((i,indexo)=>(
            indexo != index
        ))
        setTask(remainings)
    }
  return (
    <div style={{border:'1px solid black',width:"30%",marginTop:"10px",padding:"3px"}}>
     {
        (edit == true ? 
        <div style={{padding:"5px"}}>
        <input type="text" value={taskValue}
         onChange={(e)=>setTaskValue(e.target.value)}/>
        <button onClick={()=>{
         const taskArray = [...task];
         taskArray.filter(function(task,indexo){
            if(indexo === index) {
                task.name = taskValue;
            }
         })
         setTask(taskArray);
         setEdit(false)
        }}>Apply changes</button>
        </div> : (
            <>
            <p>Task Name : {name}</p>
            <p>Priority : {priority}</p>
             <button onClick={handleDelete}>delete Task</button>
             <button onClick={()=>setEdit(true)}>Edit task</button>
             </>
        ))
     }
    </div>
  )
}

export default Task
