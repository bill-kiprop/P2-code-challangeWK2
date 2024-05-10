
import React from 'react';
import Yourbotarmy from './Yourbotarmy';
import { NavLink } from 'react-router-dom';

export default function BotSpecs({ botSpecs, handleDischarger }) {
  
  if (!botSpecs || !botSpecs.avatar_url) {
    return <div>No avatar available</div>;
  }

  return (
    <div className='background-image'>
      
    <div className='Specs-container'>
      
        <div>
            <img 
            src={botSpecs.avatar_url}
            className='avatarSpecs'/>
        </div>
        <div>
         <div className='specsdiv'>  
      <p>NAME: {botSpecs.name}</p>
      <p>CLASS: {botSpecs.bot_class}</p>
      <p>CATCHPHRASE: {botSpecs.catchphrase}</p>
      </div> 
      <div className='iconsDiv specsdiv'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrdDLtTlLtPZffGAULyJgFBci2-IbXOv6Dq2311XsnQ&s" className='icon'/><p className='text'>{botSpecs.health}</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-n890p4HuTf6H0eFGCHbhLOTBV_inIw2tDluja2lNPA&s" className='icon'/><p>{botSpecs.damage}</p>
            <img src="https://t4.ftcdn.net/jpg/01/87/35/01/360_F_187350122_iDuilaJkEa74U4LCNY7noWTgRf0p3ufb.jpg" className='icon'/><p>{botSpecs.armor}</p>
        </div>
        <div className='specsdiv'>
            <div>
            <button className='button'>Enlist</button>
            </div>
            <div>
            <NavLink to={'/'}><button className='button' to={'/'}>Go Back</button></NavLink>
            

            </div>

      </div>
      </div>
    </div>
    </div>
  );
}
