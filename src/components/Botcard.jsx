import React from 'react';
import { Link } from 'react-router-dom';

export default function Botcard({
    id,
    name,
    health,
    damage,
    amour,
    Botclass,
    catchphrase,
    image,
    created,
    updated,
    enlistBot,
    releaseBot,
}) {
    const handleEnlist = () => {
        enlistBot(id);
    };

    const handleRelease = () => {
        releaseBot(id);
    };

    return (
       
            <div>
                <div className='card'>
                <Link to={`/robot/${id}`}>
                    <img src={image} alt={name} className='image' />
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
                    </Link>
                    <div className='iconsDiv'>
                        <button className="button"onClick={handleEnlist}>Enlist</button>
                        <button className="button"onClick={handleRelease}>Release</button>
                    </div>
                </div>
            </div>
       
    );
}