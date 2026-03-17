interface Title {
  title: string ;
  overview : string;
}
const VideoTitle = ({title, overview}: Title) => {
  return (
    // <div className=" pt-20 md:pt-[15%] px-4 md:px-12 lg:px-24 w-full h-full text-white absolute bg-gradient-to-r from-black">
      // <div className="px-6 md:px-24 w-screen aspect-video bg-linear-to-r from-black pt-2 absolute text-white">
      // <div className="px-6 md:px-24 w-screen aspect-video bg-linear-to-r from-black pt-[20%] absolute text-white">
      <div className="absolute inset-0 flex flex-col pt-28 md:pt-48 lg:pt-56 px-6 md:px-24 text-white z-40 bg-gradient-to-r from-black/70 via-transparent/50 to-black/30">
      {/* <h1 className=" text-2xl md:text-4xl lg:text-6xl font-bold">{title}</h1>
      <p className="py-2 md:py-6 text-sm md:text-lg w-full md:w-1/2 lg:w-1/4">{overview}</p> */}
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-m w-1/4">{overview}</p>
      {/* <div className="flex gap-3 md:gap-5 mt-4">
        <button className="bg-gray-500 text-white px-4 md:px-12 py-2 md:py-3 text-sm md:text-xl opacity-55 rounded-lg"> ▶️Play</button>
        <button className="bg-gray-500 text-white px-4 md:px-12 py-2 md:py-3 text-sm md:text-xl opacity-55 rounded-lg " > More info</button> */}
         <div className="my-4 md:m-0">
            <button className="bg-white text-black py-1 md:py-4 px-2 md:px-12 text-lg hover:bg-white/80 rounded-lg">
                ▶️ Play
            </button>
            <button className="bg-gray-400 mx-2 hidden md:inline-block text-white p-4 px-10 text-lg hover:bg-gray-400/80 rounded-lg">
                More Info
            </button>
      </div>
    </div>
  )
}

export default VideoTitle
