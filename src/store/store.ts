import {configureStore} from '@reduxjs/toolkit'
import tasksReducer from './slices/tasks.ts'

export const store = configureStore ({
  reducer: {
    tasks: tasksReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
