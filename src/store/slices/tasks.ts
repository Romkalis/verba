import {createSlice, PayloadAction} from '@reduxjs/toolkit'


export enum TaskStatus {
  Progress,
  Ready,
  Deleted
}
export type Task = {
  text: string,
  id: string,
  status: TaskStatus
}
export type TaskState = Array<Task>


const initialState: Array<Task> = [
  {
    text: 'Первая задача',
    id: '1',
    status: TaskStatus.Progress
  },
  {
    text: 'Готовая задача',
    id: '2',
    status: TaskStatus.Ready
  },
  {
    text: 'Удаленная задача',
    id: '3',
    status: TaskStatus.Deleted
  }
]
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload)
      console.log('добавляем задачу')
    },
    removeTasks: (state) => {
      state.forEach( task => task.status = TaskStatus.Deleted)
      console.log('поместили все задачи в удаленные')
    },
    removeTask: (state, action) => {
      console.log('удаляем задачу', state, action)
    },
    changeTask: (state, action:PayloadAction<{status: TaskStatus, id: string}>) => {
      const task = state.find(task => task.id === action.payload.id)
        if(task) {
          task.status = action.payload.status
        }
    }
  },
})

export const {
  addTask,
  removeTasks,
  removeTask,
  changeTask} = tasksSlice.actions
export default tasksSlice.reducer
