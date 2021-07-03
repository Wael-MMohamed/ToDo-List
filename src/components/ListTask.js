import { useSelector, useDispatch } from 'react-redux';
import { completedTask, filterIsDone } from '../features/todoSlice';

export default function ListTask (){

    const tasks = useSelector((state)=> state.todo);
    const dispatch = useDispatch();

    function handleClick(task){
        dispatch(completedTask(task));
    }

    function getCompleted(e){
        e.preventDefault();
        dispatch(filterIsDone());
    }
 
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <span>Tasks</span>
                <span className='float-end'>Completed<input class="form-check-input ms-3" type="checkbox" onSelect={getCompleted} /></span>
            </li>
            {tasks.map((item) =>{
               return <li className="list-group-item">{item.description}
               <button className='btn float-end' onClick={() => handleClick(item)}>
                   {item.isDone?<i class="fas fa-check"></i>:<i className="fas fa-times"></i>}
               </button>
               </li>
            })}
        </ul>
    )
}