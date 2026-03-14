import GptSearchBar from "./GptSearchBar"; 
 import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10' >
        <img 
        src ={BG_URL}
        alt="logo"
        />
      </div>
     <GptSearchBar/>
     <GPTMovieSuggestion/>
    </div>
  )
}

export default GptSearch
