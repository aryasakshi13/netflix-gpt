import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Video } from "./type";
import { Movie } from "./type";


interface MovieState {
  nowPlayingMovies: Movie[];
  PopularMovies: Movie[];
  topRatedMovies: Movie[];
  upCommingMovies: Movie[];
  trailerVideo: Video | null;
}
const initialState: MovieState = {
  nowPlayingMovies: [],
  PopularMovies: [],
  topRatedMovies:[],
  upCommingMovies: [],
  trailerVideo: null,
};
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) =>{
            state.nowPlayingMovies = action.payload;
        },
         addPopularMovies: (state, action: PayloadAction<Movie[]>) =>{
            state.PopularMovies = action.payload;
        },
        addtopRatedMovies: (state, action: PayloadAction<Movie[]>) =>{
            state.topRatedMovies = action.payload;
        },
        addupCommingMovies: (state, action: PayloadAction<Movie[]>) =>{
            state.upCommingMovies = action.payload;
        },
        addTrailerVideo: (state, action: PayloadAction<Video>) => {
          state.trailerVideo = action.payload;
        }
        
    }

});

export const {addNowPlayingMovies,  addTrailerVideo, addPopularMovies, addtopRatedMovies, addupCommingMovies} = movieSlice.actions;

export default movieSlice.reducer;
