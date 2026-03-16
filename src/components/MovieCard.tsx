import { IMG_CDN_URL } from "../utils/constants";

interface MovieCardProps {
  posterPath: string;
}

const MovieCard = ({posterPath}:MovieCardProps) => {
  if(!posterPath) return null ;
    return(
        <div className="w-48 pr-3">
          <img alt = "movieCard" src = {IMG_CDN_URL+ posterPath}/>
          
        </div>
    )
}
export default MovieCard ;