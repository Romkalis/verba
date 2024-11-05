import {configureStore} from '@reduxjs/toolkit'
import tasksReducer from './slices/tasks.ts'
import usersReducer from './slices/users.ts'

export const store = configureStore ({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
