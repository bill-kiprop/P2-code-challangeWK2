import { useEffect, useState } from "react"
import Botcollection from "./components/Botcollection"
import Yourbotarmy from "./components/Yourbotarmy";



function App() {
  const [robots, setRobots] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/bots', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => setRobots(data))
  }, []);
  
  
 console.log(robots)

  return (
  <div>
    <Yourbotarmy />
    <Botcollection robots={robots}/>
  </div>
  )
}

export default App
