import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({toDo, markDone, setUpdateData, deleteTask}) => {
    return (  
        <div className="todo">
             {toDo && toDo
     .sort((a, b) => a.id ? 1 : -1)
     .map( (task, index) =>{
      return (
      <React.Fragment key={task.id}>
        <div className='col taskBg'> 
           <div className={task.status ? 'done': ''}>
              <span className='taskNumber'>{index + 1}</span>
              <span className='taskText'>{task.title}</span>
           </div>
      
           <div className='iconsWrap'>
              <span title='Completed / Not Completed' id="complete"
                onClick={(e) => markDone(task.id)}>
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>

              { task.status ? null : ( 
              <span title='Edit' id="edit"
                onClick={() => setUpdateData({ 
                  id: task.id, 
                  title: task.title,
                  status: task.status ? true : false
                  })}>
                 <FontAwesomeIcon icon={faPen} />
              </span>
              )}

              <span title='Delete' id="delete"
                onClick={()=>deleteTask(task.id)}>
                 <FontAwesomeIcon icon={faTrashCan} />
              </span>
           </div>
        </div>
       
      </React.Fragment>
      )
     })}
        </div>
    );
}
 
export default TaskList;