import React from 'react'

export default function Botcard({ name, health, damage, amour, Botclass, catchphrase, image, created, updated }) {
 
  return (
    <div>
        
    <div className='card'>
        <img 
        src={image}
        alt={name}
        className='image'
        />
        <div>
            <h2>{name}</h2>
            <p>CLASS: {Botclass}</p>
        </div>
        <div className='card-content'>
            <p>{catchphrase}</p>
        </div>
        <div className='iconsDiv'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8FMvWXgY0FOkUgK9S72raaPvt_jIAPFEJ5l1jmV3tQ&s" className='icon'/><p className='text'>{health}</p>
            <img src="https://static.thenounproject.com/png/119032-200.png" className='icon'/><p>{damage}</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHrSsSvlr2nHarriCvkCnDG-ZRw7v28TvAA&s" className='icon'/><p>{amour}</p>
            
        </div>
            
    </div>
    </div>
  )
}
