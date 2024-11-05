import s from './styles.module.css'
import React, { ReactEventHandler, useState } from 'react'
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks.ts";
import {addTask, removeTasks, TaskStatus} from "../../store/slices/tasks.ts";
import uniqid from 'uniqid'

export const AddTasks = () => {

  const [task, setTask] = useState<string>('')
  const dispatch = useAppDispatch()



  const handlerTaskInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }
  const handlerAddTask = () => {
    dispatch(addTask({
        text: task,
        id: uniqid(),
        status: TaskStatus.Progress
      },))
    setTask('')
  }

  const handleDeleteTasks = () => {
    dispatch(removeTasks())
  }

  return (
    <>
      <div className={s.wrap}>
        <button onClick={handlerAddTask} className={`${s.newTask__add} ${s.button}`}>
          Добавить задачу
        </button>
        <label htmlFor="newTask" className={s.newTask__label}>
          <input onChange={handlerTaskInput} type="text" className={s.newTask__input} placeholder={'Новая задача...'} value={task}/>
        </label>

        <button onClick={handleDeleteTasks} className={`${s.newTask__remove} ${s.button}`}>
          Удалить задачи
        </button>
      </div>
    </>
  )
}
