import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BotSpecs from '../Botspecs'


function Botdetails() {
    const [robo , setRobot] = useState()
    const params = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/bots/${params.id}`)
            .then((res) => res.json())
            .then((data) => setRobot(data))
    }, [params.id])
   
  return (
    <div>
        <BotSpecs botSpecs={robo}/>
    </div>
  )
}

export default Botdetails