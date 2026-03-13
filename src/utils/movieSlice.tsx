import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Video } from "./type";
import { Movie } from "./type";


interface MovieState {
  nowPlayingMovies: Movie[];
  trailerVideo: Video | null;
}
const initialState: MovieState = {
  nowPlayingMovies: [],
  trailerVideo: null,
};
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action: PayloadAction<Video>) => {
          state.trailerVideo = action.payload;
        }
    }

});

export const {addNowPlayingMovies,  addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
