import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BotSpecs from '../Botspecs';
import Yourbotarmy from '../Yourbotarmy';

function Botdetails() {
    const [robo, setRobot] = useState();
    const [yourBotArmy, setYourBotArmy] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/bots/${params.id}`)
            .then((res) => res.json())
            .then((data) => setRobot(data));
    }, [params.id]);

    function handleDischarge(){
        
        fetch(`http://localhost:3000/bots/${robo.id}`, {
            method: 'DELETE',
        })
            .then(() => {
                
                setYourBotArmy(yourBotArmy.filter((bot) => bot.id !== robo.id));
            })
            
    };

    return (
        <div>
            <Yourbotarmy yourBotArmy={yourBotArmy} handleDischarger={handleDischarge}/>
            <BotSpecs botSpecs={robo} />

           
        </div>
    );
}

export default Botdetails;