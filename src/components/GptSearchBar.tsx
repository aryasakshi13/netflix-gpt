const GptSearchBar = () =>{
    return (
        
        <div className="pt-[20%] flex justify-center ">
            <form className=" w-1/2 bg-black grid grid-cols-12">
               <input className="p-4 m-4 col-span-9" type ="text" placeholder="search your favoraite movie"></input>
               <button className="px-2 py-2 bg-red-700 text-white rounded-lg col-span-3 m-4">Search</button>
            </form>
        </div>
    )
};
export default  GptSearchBar;