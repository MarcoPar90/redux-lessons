import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootReducer } from "..";


const initialState = [
    {id: '0', name: 'Marco Parisi'},
    {id: '1', name: 'Alessandra Guglielmino'}
]

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: {
            reducer(state, action: PayloadAction<{ id: string; name: string; }>) {
                state.push(action.payload);
            },
            prepare(name: string): { payload: { id: string; name: string; }; } { //prepare reducer payload config
                return {
                    payload: {
                        id: nanoid(), //create id automatically
                        name
                    }
                };
            },
        }
    },
});
export const selectAllUser = (state: RootReducer) => state.user;
export const { addUser } = userReducer.actions;

export default userReducer.reducer;