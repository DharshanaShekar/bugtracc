import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState: [{}],
    reducers: {
        getUser: (state)=>{
        state.push({name:"Dharshana"})
        state.push({name:"Kingslin"})
        }
    }
})

export default slice.reducer;

export const{getUser} = slice.actions;