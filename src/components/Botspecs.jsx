// BotSpecs.js
import React from 'react';
import Yourbotarmy from './Yourbotarmy';

export default function BotSpecs({ botSpecs }) {
  if (!botSpecs) {
    return <div>No bot specs available.</div>;
  }

  return (
    <div>
        <Yourbotarmy />
    <div className='Specs-container'>
      
        <div>
            <img 
            src={botSpecs.avatar_url}
            className='avatarSpecs'/>
        </div>
        <div>
            
      <p>NAME: {botSpecs.name}</p>
     
      <p>CLASS: {botSpecs.bot_class}</p>
      <p>CATCHPHRASE: {botSpecs.catchphrase}</p>
      <div className='iconsDiv'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrdDLtTlLtPZffGAULyJgFBci2-IbXOv6Dq2311XsnQ&s" className='icon'/><p className='text'>{botSpecs.health}</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-n890p4HuTf6H0eFGCHbhLOTBV_inIw2tDluja2lNPA&s" className='icon'/><p>{botSpecs.damage}</p>
            <img src="https://t4.ftcdn.net/jpg/01/87/35/01/360_F_187350122_iDuilaJkEa74U4LCNY7noWTgRf0p3ufb.jpg" className='icon'/><p>{botSpecs.armor}</p>
        </div>
      <p>Created At: {botSpecs.created_at}</p>
      <p>Updated At: {botSpecs.updated_at}</p>
      </div>
    </div>
    </div>
  );
}
