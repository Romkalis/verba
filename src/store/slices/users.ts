import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    name: string;
    id: string;
    password: string;
    isAdmin: boolean;
    isLogged: boolean;
}
type UserPayload = {
    name: string;
    password: string;
}

const initialState: Array<User> = [
    {
        name: 'admin',
        id: '007',
        password: 'admin',
        isAdmin: true,
    }
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        isUser: (state, action: PayloadAction<UserPayload>) => {

            // можно было реализовать логин в стор,  но в результате сделал через useStateё

            // const user = state.find( user => {
            //     user.name === action.payload.name &&
            //     user.password === action.payload.password
            // })
            // user ? user.isLogged = true : user!.isLogged = false 
        },
        addUser: () => {
            // логика добавления пользователя
        },
        removeUser: () => {
            // логика удаления пользователя
        },
        
        // и так далее
    }
})

export const {isUser} = userSlice.actions
export default userSlice.reducer
