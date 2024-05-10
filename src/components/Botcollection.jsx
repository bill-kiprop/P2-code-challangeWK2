import React from 'react';
import Botcard from './Botcard';

export default function Botcollection({ robots, enlistBot, releaseBot }) {
    const roboCard = robots.map((robotss) => {
        return <Botcard key={robotss.id} id={robotss.id} name={robotss.name} health={robotss.health} damage={robotss.damage} amour={robotss.armor} Botclass={robotss.bot_class} catchphrase={robotss.catchphrase} image={robotss.avatar_url} created={robotss.created_at} updated={robotss.updated_at} enlistBot={enlistBot} releaseBot={releaseBot} />;
    });

    return (
        
        <div className='grid grid-cols-4 gap-4 my-10 Botcontainer'>
            
            {roboCard}
        </div>
    );
}