import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

export default function AddTask(){

    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch();

    function handleClick(e){
        e.preventDefault();
        dispatch(addTodo(newTask));
    }

    return(
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Add New Task"  
            value={newTask} onChange={(prev)=>(
                setNewTask(prev.target.value) 
                )} />
            <button className="btn btn-outline-secondary" type="button"
                onClick={handleClick}    
            >Add</button>
        </div>
    )
}