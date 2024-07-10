import useSWR from "swr";
import "./App.css"

function Setup({setup}){
return(
  <div className="setup">
    <h1>{setup}</h1>
  </div>
)
}

function Punchline({punchline}){
return(
  <div className="punchline">
    <h1>{punchline}</h1>
  </div>
)
}



export default function App(){
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data,error} = useSWR('https://official-joke-api.appspot.com/jokes/random',fetcher)
  if(!data) return <div>loading...</div>
  const handlenxt = ()=> window.location.reload()

  return(
    <>
    <Setup setup={data.setup} />
    <Punchline punchline={data.punchline} />
    <button onClick={handlenxt} className="nextbutton">Next Joke</button>
    
    </>
  );
}