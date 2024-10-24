import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const TaskForm = ({newTask, setNewTask, addTask}) => {
    return ( 
        <div className="add-task">
             {/* Add Task */} 
     <div className='row'> 
       <div className='col'>
         <input id="addTask"
         placeholder="Add your task"
         value={newTask}
         onChange={(e) => setNewTask(e.target.value)}
         className='form-control form-control-lg'
         />
       </div>
       <div className='col-auto'>
         <button id="add"
          className='btn btn-lg btn-success'
          onClick={addTask}
          > <FontAwesomeIcon icon={faPlus} id='plus'/>
          </button>
       </div>
     </div>
        </div>
     );
}
 
export default TaskForm;