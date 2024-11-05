import s from './styles.module.css'
import {TaskStatus} from "../../store/slices/tasks.ts";
export const TasksNavigation = ({setSort, active}) => {

  return (
    <ul className={s.tasksNav__list}>
      <li className={s.tasksNav__item}>
        <button
          onClick={() => setSort(TaskStatus.Progress)}
          className={s.tasksNav__link}
          style={{color: active === TaskStatus.Progress ? 'darkseagreen' : 'unset'}}
        >Текущие Дела</button>
      </li>
      <li className={s.tasksNav__item}>
        <button
          onClick={() => setSort(TaskStatus.Ready)}
          className={s.tasksNav__link}
          style={{color: active === TaskStatus.Ready ? 'darkseagreen' : 'unset'}}
        >Выполненные дела</button>
      </li>
      <li className={s.tasksNav__item}>
        <button
          onClick={ () => setSort(null)}
          className={s.tasksNav__link}
          style={{color: active === null ? 'darkseagreen' : 'unset'}}
        >Все дела</button>
      </li>
      <li className={s.tasksNav__item}>
        <button
          onClick={() => setSort(TaskStatus.Deleted)}
          className={s.tasksNav__link}
          style={{color: active === TaskStatus.Deleted ? 'darkseagreen' : 'unset'}}
        >Корзина</button>
      </li>
    </ul>
  )
}
