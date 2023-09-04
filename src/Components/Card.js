import React from 'react';

const Card = ({movie}) => {
    return (
    
        <article className='card movie-card overlay' style={{background: ` url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        height : "350px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize : "cover"
        }}>
            {/* <img src={"https://image.tmdb.org/t/p/original/"+ movie.backdrop_path} alt ='movie'/> */}
            <ul>
                <li className='titre'>Titre: {movie.title}</li>
                <li>Date de sortie: {movie.release_date}</li>
                <li>Nombre de vote: {movie.vote_count}</li>
                <li>Synopsis: {movie.overview}</li>
                <li>Note moyenne: {movie.vote_average}</li>

            </ul>
        </article>
    
    );
};

export default Card;