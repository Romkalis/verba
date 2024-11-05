import s from './styles.module.css'
import {TaskStatus} from "../../store/slices/tasks.ts";
import {useAppDispatch} from "../../store/hooks/hooks.ts";
import {changeTask} from "../../store/slices/tasks.ts";

export const Task = ({task}) => {

  const dispatch = useAppDispatch()
  const handlerTaskReady = () => {
    dispatch(changeTask({status: TaskStatus.Ready, id: task.id}))
  }
  const handlerTaskDeleted = () => {
    dispatch(changeTask({status: TaskStatus.Deleted, id: task.id}))
  }

  let taskClass: string

  if (task.status === TaskStatus.Ready) {
    taskClass = s.task__ready
  } else if (task.status === TaskStatus.Deleted) {
    taskClass = s.task__deleted
  } else {
    taskClass = s.task__text
  }

  return (
    <>
      <li className={s.task}>
          <p className={taskClass} >
            {task.text}
          </p>
          <div className={s.task__buttons}>
            <button onClick={handlerTaskReady} className={s.task__ready}>
              <svg className={s.task__icon} version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="none" width={'24'}>
                <polygon className="st0" points="434.8,49 174.2,309.7 76.8,212.3 0,289.2 174.1,463.3 196.6,440.9 196.6,440.9 511.7,125.8 434.8,49"/>
              </svg>
            </button>
            <button onClick={handlerTaskDeleted} className={s.task__delete}>
              <svg className={s.task__icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" width={'24'}>
                <path d="M22.68,29H9.32a3,3,0,0,1-3-2.56l-3-20A3,3,0,0,1,6.32,3H25.68a3,3,0,0,1,3,3.45l-3,20A3,3,0,0,1,22.68,29ZM6.32,5a1,1,0,0,0-.76.35,1,1,0,0,0-.23.8l3,20a1,1,0,0,0,1,.85H22.68a1,1,0,0,0,1-.85l3-20a1,1,0,0,0-.23-.8A1,1,0,0,0,25.68,5Z"/><path className="cls-1" d="M12.61,20.39a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41l6.79-6.79a1,1,0,1,1,1.41,1.41L13.31,20.1A1,1,0,0,1,12.61,20.39Z"/>
                <path d="M19.39,20.39a1,1,0,0,1-.7-.29L11.9,13.31a1,1,0,0,1,1.41-1.41l6.79,6.79a1,1,0,0,1,0,1.41A1,1,0,0,1,19.39,20.39Z"/>
              </svg>
            </button>
          </div>
      </li>
    </>
  )
}
