const UpdateForm = ({updateData, changeTask, updateTask, cancelTask}) => {
    return ( 
    <div className="update-form">
          {/* Update TaskForm */}
       <div className='row'>
         <div className='col'>
           <input id="updateTask"
           placeholder="Update task"
             value={ updateData && updateData.title }
              onChange={ (e) => changeTask(e)}
             className='form-control form-control-lg'
           />
         </div>
         <div className='col-auto' id="update-content">
           <button id="update"
            className='btn btn-lg btn-success mr-20'
            onClick={updateTask}
             >Update</button>
           <button id="cancel"
           onClick={cancelTask}
            className='btn btn-lg btn-warning'
             >Cancel</button>
        </div>
       </div>
    </div>
     );
}
 
export default UpdateForm;