import "./App.css";
import { AddTasks } from "./AddTask/AddTasks.tsx";
import { TasksList } from "./TasksList/TasksList.tsx";
import { Login } from "./Login/Login.tsx";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <>
      <h1>Тестовое задание Verba-Group</h1>

      <Login setIsLogged={setIsLogged}/>

      {isLogged && (
        <>
          
          <AddTasks />
          <TasksList />
        </>
      )}
    </>
  );
}

export default App;
