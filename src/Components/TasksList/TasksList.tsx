import {TasksNavigation} from "../TasksNavigation/TasksNavigation.tsx";
import {Task} from '../Task/Task.tsx'
import {useAppSelector} from "../../store/hooks/hooks.ts";
import s from './styles.module.css'
import {TaskStatus} from "../../store/slices/tasks.ts";
import {useState} from "react";


export const TasksList = () => {

  const tasks = useAppSelector(state => state.tasks)

  const [sort, setSort] = useState<TaskStatus | null>(TaskStatus.Progress)

  let filteredTasks = sort === null
    ? tasks
    : tasks.filter(task => task.status === sort)


  return (
      <section className={s.wrap}>

        <TasksNavigation setSort={setSort} active={sort} />

        <ul className={s.tasks__list}>
          {
            filteredTasks.map(task => <Task key={task.id} task={task}/>)
          }
        </ul>
      </section>
  )
}


