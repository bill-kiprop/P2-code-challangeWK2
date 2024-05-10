import React, { useEffect, useState } from "react";
import Yourbotarmy from "../Yourbotarmy";
import Botcollection from "../Botcollection";
import SortBar from "../SortBar";

function Home() {
    const [robots, setRobots] = useState([]);
    const [filteredRobots, setFilteredRobots] = useState([]);
    const [yourBotArmy, setYourBotArmy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/bots', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setRobots(data);
            setFilteredRobots(data);
        });
    }, []);

    const enlistBot = (botId) => {
        const botToEnlist = robots.find(bot => bot.id === botId);
        if (!yourBotArmy.find(bot => bot.id === botId)) {
            setYourBotArmy([...yourBotArmy, botToEnlist]);
        }
    };

    const releaseBot = (botId) => {
        setYourBotArmy(yourBotArmy.filter(bot => bot.id !== botId));
    };

    const dischargeBot = (botId) => {
        
        fetch(`http://localhost:3000/bots/${botId}`, {
            method: 'DELETE',
        })
        .then(() => {
            setRobots(robots.filter(bot => bot.id !== botId));
            setFilteredRobots(filteredRobots.filter(bot => bot.id !== botId));
            setYourBotArmy(yourBotArmy.filter(bot => bot.id !== botId));
        })
        .catch((error) => console.error('Error deleting bot:', error));
    };

    const sortBots = (criteria) => {
        const sortedBots = [...filteredRobots].sort((a, b) => a[criteria] - b[criteria]);
        setFilteredRobots(sortedBots);
    };

    return (
        <div>
            
            <Yourbotarmy yourBotArmy={yourBotArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
            <SortBar sortBots={sortBots} />

            <Botcollection robots={filteredRobots} enlistBot={enlistBot} />
        </div>
    );
}

export default Home;