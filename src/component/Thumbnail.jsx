import { useRef, useState } from "react";
function Thumbnail({video}){
    const videoRef = useRef();
    const [click , setClick] = useState(0);
    const onVideo = ()=>{
    if(click == 0){
        play();
        setClick(1);
    }
    else{
        pause();
        setClick(0);
    }
    }
    function play(){
      videoRef.current.play();
    //   videoRef.current.muted();
    }
    function pause(){
      videoRef.current.pause();
    }
    return (
        <>
        <video width="200" height="200" ref={videoRef}
        onClick={onVideo}>
         <source src={video.link} type="video/mp4"/>
       </video>
        </>     
    )
}
export default Thumbnail;