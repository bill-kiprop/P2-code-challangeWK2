import React from 'react';
import Botcard from './Botcard';

export default function Yourbotarmy({ yourBotArmy, releaseBot, dischargeBot }) {
    if (!yourBotArmy || yourBotArmy.length === 0) {
        return <div className='yourbotarmy'></div>;
    }

    const roboCard = yourBotArmy.map((bot) => {
        return (
            <Botcard
                key={bot.id}
                id={bot.id}
                name={bot.name}
                health={bot.health}
                damage={bot.damage}
                amour={bot.armor}
                Botclass={bot.bot_class}
                catchphrase={bot.catchphrase}
                image={bot.avatar_url}
                created={bot.created_at}
                updated={bot.updated_at}
                releaseBot={releaseBot}
                dischargeBot={dischargeBot}
            />
        );
    });

    return (
        <div className='yourbotarmy'>
            <h2>Your Bot army</h2>
            <div className='grid grid-cols-4 gap-4 my-10 Botcontainer'>{roboCard}</div>
        </div>
    );
}