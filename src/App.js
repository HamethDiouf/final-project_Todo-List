import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import UpdateForm from './components/UpdateForm';
import TaskList from './components/TaskList';

function App() {

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([
     { id: 1, title: "Task 1", status:false },
     { id: 2, title: "Task 2", status:false },
  ]);

  /* Add a new task to the list */
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('')

  // Add task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let newEnter = { id: num, title: newTask, status: false } 
      setToDo([...toDo, newEnter]);
      setNewTask('');
    }
  }

   // Delete task
   const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id  !== id);
    setToDo(newTasks)

   }

  //  Mark task 
   const markDone = (id) => {
    const newTasks = toDo.map( task => {
      if(task.id === id ) {
        return({...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTasks);
   }

    // Cancel task
  const cancelTask = () => {
    setUpdateData('');

  }

   // Change task
   const changeTask = (e) => {
    let newEnter = {
      id: updateData.id,
      title: e.target.value ,
      status: updateData.status ? true : false,
    }
    setUpdateData(newEnter);
   }

    // Update task
  const updateTask = (e) => {
    let filtered = [...toDo].filter( task => task.id !== updateData.id);
    let updatedObject = [...filtered, updateData]
    setToDo(updatedObject);
    setUpdateData('')
  }
  return (
    <div className="container App" >
      <div className='app-wrapper'>
      <br/>
      <br/>
     <h1 id='title'>Todo-List
     <img src={'/images/notebook.gif'} alt={'notebook'}/>
     </h1>
     <br/>

     {/* Update Task */}
     {updateData && updateData ? (
      <>
       <UpdateForm 
          updateData={updateData}
          updateTask={updateTask}
          cancelTask={cancelTask}
          changeTask={changeTask} 
       />
       </>
     ) : 
     (
      /* Task Form */
      <>
    <TaskForm 
      newTask={newTask}
      setNewTask={setNewTask}
      addTask={addTask}
    />
    <br/>
    </>
     )}
     
     {/* DIsplay TaskList */}
     {toDo && toDo.length ? '' : 'No Tasks...'}
     <TaskList
     toDo={toDo}
     markDone={markDone}
     setUpdateData={setUpdateData}
     deleteTask={deleteTask}
     />
     </div>
    </div>
  );
}

export default App;
