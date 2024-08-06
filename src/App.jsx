import { useQuery } from '@tanstack/react-query';
import './App.css'
function App() {
  const {data:Data,isloading, error} = useQuery({
    queryfn:()=>{
          fetch('https://jsonplaceholder.typicode.com/comments?_limit=10').then((res)=>res.json());
    },
    queryKey:['Data']
  });
  if(isloading) return <div>loading.....</div>;
  if(error) return <div><i>error .......</i></div>;
  return (
    <>
    <div>
      {
        Data && Data.map((val)=>{
          let store =<h2 key={val.id} className="users">
             {val.id}  
            {val.email}
        </h2>
        return store;
        })
      }
    </div>
    </>
  )
}

export default App
