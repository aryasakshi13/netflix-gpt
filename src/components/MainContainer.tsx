import { useSelector } from "react-redux";
import { RootState } from "../utils/appstore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () =>{
    const movies =useSelector((store:RootState) => store.movies?.nowPlayingMovies);
   
    if(!movies || movies.length===0) return null ;

    const mainMovies = movies[0];
    

    const {original_title, overview,id} = mainMovies;
     
    return(
               <div className="pt-[30%] bg-black md:pt-0"> 
            <VideoBackground movieId ={id}/>
           <VideoTitle title ={original_title} overview={overview}/> 
          
        </div>
    )
};
export default MainContainer;