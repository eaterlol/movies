import React, { useEffect,useState } from 'react';
import Card from './Card';


const Movie = () => {
    const [data,setData] = useState([])

  
      // Permet de récupérer les données d'une API // Similaire à Axios 
      // ATTENTION /!\ RESSOURCE EXTERNE, qui dit RESSOURCE EXTERNE DIT UN HOOK SPECIFIQUE, /!\
      // ATTENTION AUX BOUCLES INFINIES MEME SI CA FONCTIONNE
      
      

    
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmE0YjkxYmNjNGZiMmMyZDk1NGFlZjlkMmViMmU0NCIsInN1YiI6IjY0ZjBmZWZjM2E5OTM3MDExY2JkZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPjp8MlpHbSaX30XcjKyPlVcmv8-_N50jApvjq4x7bg'
            }
          };
        fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options)
        .then(response => response.json())
        .then(response => {
          setData(response.results)
           
            console.log("Test pour récupération de la Data ") 
            console.log(data)
        })
        .catch(err => console.error(err));
    },[])


    return (
        <div className='container'>
            {data.map((el,i) => <Card key={i} movie={el} />)}
        </div>
    );
};

export default Movie;