import { createSlice } from "@reduxjs/toolkit"

interface GptState {
  movieNames: string[] | null;
  movieResults: any[] | null;
  showGptSearch: boolean;
}

const initialState: GptState = {
   showGptSearch: false,
  movieNames: null,
  movieResults: null,
 

};

const gptSlice = createSlice({
    name: 'gpt',
    initialState,
    reducers: {
        toggleGptSearchView :(state) =>{
            state.showGptSearch = !state.showGptSearch;
        },  
        addGptMovieResult:(state, action) =>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames= movieNames;
            state.movieResults = movieResults;
        },
    },
});

export const {toggleGptSearchView, addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;