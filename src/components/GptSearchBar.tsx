import { RootState } from "../utils/appstore";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () =>{

    const langKey = useSelector((store:RootState) => store.config.lang)
    const searchText = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

   const SearchMovieTMDB = async (movie: string) =>{
     const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
        + movie +
        "&include_adult=false&language=en-US&page=1",
       API_OPTIONS
    );
         const json = await data.json();
         return json.results;
        
   }
    const handleGptSearchClick = async () => {
        console.log(searchText.current?.value);
        //  Make an api call to GPT API and get Movie Results 
       const gptQuery =
    "Act as a movie recommendation system and suggest 5 movies for the query:"
     + searchText.current?.value + ". Only give me names of 5 movie, separated by comma.";

        const response = await openai.chat.completions.create({
         model: "llama-3.1-8b-instant",
          messages: [
                    {
                    role: "user",
                    content: gptQuery
                }
                ]
        });

            console.log(response.choices?.[0]?.message?.content);
            
            // Andaz Apna Apna, hera Pheri, Chupke chupke, jaane Bhi do yaaro, Padosan
             const groqMovies = response.choices?.[0].message?.content?.split(",");
             
            // Here split the movie wherever s=comma is present and give array of each movie 
            // [Andaz Apna Apna, hera Pheri, Chupke chupke, jaane Bhi do yaaro, "Padosan"]   
            console.log(groqMovies);
            //  for Each movie I will search tmdb api
            if (!groqMovies) return;
            const promiseArray = groqMovies.map((movie)=> SearchMovieTMDB(movie));
            console.log(promiseArray);

            const tmdbReults = await Promise.all(promiseArray);

            console.log( tmdbReults);

            dispatch(addGptMovieResult({movieNames:groqMovies, movieResults: tmdbReults}));


        };    

    return (
        
        <div className="pt-[40%]  md:pt-[20%] flex justify-center ">
            <form className=" w-full md:w-1/2  bg-black grid grid-cols-12 rounded-lg" onSubmit ={(e)=> e.preventDefault()}>
               <input ref={searchText} className="p-3 md:p-4 m-2 md:m-4 col-span-12 md:col-span-9 rounded-lg" type ="text" placeholder={lang[langKey].gptSearchPlaceholder}/>
               <button className="px-3 py-2 bg-red-700 text-white rounded-lg col-span-12 md:col-span-3 m-2 md:m-4" onClick={handleGptSearchClick}>{lang [langKey].search}</button>
            </form>
        </div>
    )
};
export default  GptSearchBar;