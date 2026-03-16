import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Language = "en" | "hindi" | "spanish";

interface langState{
    lang: Language;
}
const initialState: langState = {
  lang: "en",
};
const configSlice = createSlice({
  name : "config",
  initialState ,
   reducers: {
      changeLanguage: (state, action : PayloadAction<Language>) => {
           state.lang = action.payload;
      }
   }
});
export const {changeLanguage} = configSlice.actions;

export default configSlice.reducer;