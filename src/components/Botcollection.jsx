import React from 'react'
import Botcard from './Botcard'

export default function Botcollection({ robots }) {
    const roboCard = robots.map((robotss) => {
        return <Botcard key={robotss.id} name={robotss.name} health={robotss.health} damage={robotss.damage} amour={robotss.armor} Botclass={robotss.bot_class} catchphrase={robotss.catchphrase} image={robotss.avatar_url} created={robotss.created_at} updated={robotss.updated_at}/>
    })
  return (
    <div className='grid grid-cols-4 gap-4 my-10'>
      {roboCard}  
    </div>
  )
}
