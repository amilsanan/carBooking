import {createSlice} from "@reduxjs/toolkit"

const checkIsLoggedIn = () => {
    let token = localStorage.getItem('jwtToken');
    if(token){
        return true
    }
    return false
}

 const userSlice = createSlice({
    name:'user',
    initialState:{
        isLoggedIn:checkIsLoggedIn()
    },
    reducers: {
        setLoggedIn:(state,action)=>{
            state.isLoggedIn = true
        },
        setLoggedOut: (state)=>{
            state.isLoggedIn = false
        }
    },

})

export const { setLoggedIn, setLoggedOut } = userSlice.actions

export default userSlice.reducer
