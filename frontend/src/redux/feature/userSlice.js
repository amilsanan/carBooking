import {createSlice} from "@reduxjs/toolkit"

 const userSlice = createSlice({
    name:'user',
    initialState:{
        id:"",
        name:"",        

    },
    reducers: {
        setUser:(state,action)=>{
            console.log(action.payload);
            state.id=action.payload._id
            state.name=action.payload.name

        }
    },

})

export const { setUser } = userSlice.actions

export default userSlice.reducer
