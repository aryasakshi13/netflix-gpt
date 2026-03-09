import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}
const initialState: UserState = {
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
};
const userSlice = createSlice(
    {
        name : "user",
        initialState ,
        reducers:{
            addUser:(state, action) => {
                return action.payload;
            },
            removeUser:() =>{
                return initialState; 
            },
        },



    }
);
export  const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;