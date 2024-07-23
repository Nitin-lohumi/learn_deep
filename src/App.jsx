import { useEffect, useState } from 'react';
import './App.css'
import Frist from './component/Frist';
function App() {
  const [heading, setHeading] = useState("");
const video = [
  {
      name:"Frist video",
      id : 1,
      discription : " video 1",
      link: "Videos/Video.mp4"
  }
  ,
  {
      name :"second video",
      id : 2,
      discription : " video 2",
      link: "Videos/Video.mp4"
  }
  ,
  {
       name  :"third video",
       id : 3,
       discription : " video 3",
       link : "Videos/Video.mp4"
  }
];
 useEffect(()=>{
  if(video.length<=0){
    setHeading("no videos are available");
  }else{
    setHeading(" there are "+ video.length +" videos ")
  }
 },[]);
  return (
    <>
    <h1>{heading}</h1>
    {video.map((video)=>
         <Frist key={video.id} videos={video} />
     )}
    </>
  )
}

export default App
