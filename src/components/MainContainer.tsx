import { useSelector } from "react-redux";
import { RootState } from "../utils/appstore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () =>{
    const movies =useSelector((store:RootState) => store.movies?.nowPlayingMovies);
    console.log("movies", movies);
    if(!movies || movies.length===0) return null ;

    const mainMovies = movies[0];
    console.log(mainMovies);

    const {original_title, overview,id} = mainMovies;
     
    return(
        <div>
           <VideoTitle title ={original_title} overview={overview}/> 
           <VideoBackground movieId ={id}/>
        </div>
    )
};
export default MainContainer;