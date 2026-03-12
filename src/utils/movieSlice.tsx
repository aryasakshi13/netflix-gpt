import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
//   vote_average: number;
//   release_date: string;
}

interface MovieState {
  nowPlayingMovies: Movie[];
}
const initialState: MovieState = {
  nowPlayingMovies: []
};
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) =>{
            state.nowPlayingMovies = action.payload;
        },
    },

});

export const {addNowPlayingMovies} = movieSlice.actions;

export default movieSlice.reducer;
