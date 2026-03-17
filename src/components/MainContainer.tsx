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
        // <div className="relative w-full h-[60vh] md:h-screen">
            // <div className="pt-[30%] md:pt-0 from-black">
            // <div className="pt-20 md:pt-0 lg:pt-0 from-black">
            // <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-screen">
               <div className="relative w-screen">  
            <VideoBackground movieId ={id}/>
           <VideoTitle title ={original_title} overview={overview}/> 
          
        </div>
    )
};
export default MainContainer;