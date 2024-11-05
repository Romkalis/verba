import s from "./styles.module.css";
import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks/hooks.ts";
import { addTask, removeTasks, TaskStatus } from "../../store/slices/tasks.ts";
import uniqid from "uniqid";
import { Button } from "../Button/Button.tsx";
import { InputField } from "../Input/Input.tsx";

export const AddTasks = () => {
  const [task, setTask] = useState<string>("");
  const dispatch = useAppDispatch();

  const handlerTaskInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const handlerAddTask = () => {
    dispatch(
      addTask({
        text: task,
        id: uniqid(),
        status: TaskStatus.Progress,
      })
    );
    setTask("");
  };

  const handleDeleteTasks = () => {
    dispatch(removeTasks());
  };

  return (
    <>
      <div className={s.wrap}>
        <Button onClick={handlerAddTask} addedClass={s.newTask__add}>
          Добавить задачу
        </Button>
        <label htmlFor="newTask" className={s.newTask__label}>
          <InputField
            name={"task"}
            onChange={handlerTaskInput}
            type="text"
            addedClass={s.newTask__input}
            placeholder={"Новая задача..."}
            value={task}
          />
        </label>

        <Button
          onClick={handleDeleteTasks}
          addedClass={`${s.newTask__remove} ${s.button}`}
        >
          Удалить задачи
        </Button>
      </div>
    </>
  );
};
