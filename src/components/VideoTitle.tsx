interface Title {
  title: string ;
  overview : string;
}
const VideoTitle = ({title, overview}: Title) => {
  return (
    <div className="pt-[15%] px-24 w-screen aspect-video text-white absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-3 px-12 text-xl opacity-55 rounded-lg m-4"> ▶️Play</button>
        <button className="bg-gray-500 text-white p-3 px-12 text-xl opacity-55 rounded-lg m-4" > More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
