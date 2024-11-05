import './App.css'
import {AddTasks} from "./AddTask/AddTasks.tsx";
import {TasksList} from "./TasksList/TasksList.tsx";

function App() {

  return (
    <>
      <h1>Тестовое задание Verba-Group</h1>

      <AddTasks />
      <TasksList />
    </>
  )
}

export default App
