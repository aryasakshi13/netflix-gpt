import GptSearchBar from "./GptSearchBar"; 
 import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
    <div className='fixed inset-0 -z-10 w-full h-full bg-black' >
        <img className="w-full h-full object-cover md:object-top-left"
        src ={BG_URL}
        alt="logo"
        />
      </div>
    <div className=" flex flex-col
    px-4 md:px-8
    pt-28 md:pt-32
    gap-6 md:gap-10
    min-h-screen
    max-w-screen-xl
    mx-auto ">
     <GptSearchBar/>
     <GPTMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch
