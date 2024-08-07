import react,{ useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import { FaSearch } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import "./App.css";
function App() {
  const [search, setsearch] = useState("");
  const [loading,setLoading] = useState();
  const [complete,setComplete] = useState();
  useEffect(()=>{
    if(search){
      setsearch(search);
      setLoading(()=> <div className="search_country"><GiArchiveResearch />...</div>);
    }
    else{
      setComplete("");
      setsearch("");
    }
  },[,search,setsearch]);
  const {
    data: Data,
    isLoading,
    error,
  } = useFetch("https://restcountries.com/v2/all");
  if (isLoading) return <div className="loading_error"><FaSearchengin /></div>;
  if (error) return <div>error....</div>;
  function seraching(e){
  setsearch(e.target.value);
  setComplete("");
  Data.map((val)=>{
    if((val.name).toLowerCase()===(e.target.value).toLowerCase()){ 
      return setComplete(()=><div className="sucess_search">secussfull search <IoCheckmarkDoneCircleSharp /></div>);
    }
    else{
     return  setLoading(()=> <div className="search_country"><GiArchiveResearch />...</div>);
    }
  })
  }
  return (
    <>
        <h2>Countries </h2>
        <div className="search">
        <input type="text" onChange={seraching} placeholder="Search for country" />
        <FaSearch />
        </div>

        {Data.map((val, index) => {
          let store =<div key={index} className="country">
                       <div className="flag">
                         <h2> Country name :<i> {val.name}</i></h2>
                       <img src={val.flags.png} alt="" width={200} />
                       </div>
                       <div className="info">
                       <p> capital : <i>{val.capital}</i></p>
                      <p>population : <i>{val.population}  people</i> </p>
                      <p>area : <i>{val.area} km²</i></p>
                      <p>languages : <i>{val.languages.map((value)=>value.name + ", ")}</i></p>
                      <p> country borders
                      <li><i>{val.borders? val.borders+`    `:" No border in this country"}</i></li>
                      </p>
                       </div>
                     </div>;
            if ((val.name).toLowerCase()===search.toLowerCase()) {
              return store;
            }
          if(search==="") {
            return store;
          }
        })}  
      <h1>{complete?complete:loading}</h1>
    </>
  );
}

export default App;
