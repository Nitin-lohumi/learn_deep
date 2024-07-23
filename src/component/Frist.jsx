import Thumbnail from "./Thumbnail";
const Frist = ({videos}) =>{
 return (
    <>    
     <div className="frist_box">
      <Thumbnail video={videos}/>
      <a href="#">
        <h3>{videos.name}</h3>
        <p>{videos.discription}</p>
      </a>
    </div>
    </>
 )
}
export default Frist;