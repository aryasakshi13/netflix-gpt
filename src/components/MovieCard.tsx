import { IMG_CDN_URL } from "../utils/constants";

interface MovieCardProps {
  posterPath: string;
}

const MovieCard = ({posterPath}:MovieCardProps) => {
  if(!posterPath) return null ;
    return(
        <div className=" w-32 md:w-40 lg:w-40 pr-2 md:pr-3 flex-shrink-0">
          <img className="w-full h-auto rounded-lg object-cover"
          alt = "movieCard" 
          src = {IMG_CDN_URL+ posterPath}/>
          
        </div>
    )
}
export default MovieCard ;