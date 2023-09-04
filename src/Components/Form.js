import React, { useState, useEffect } from 'react';


const Form = () => {
  // State pour gérer les valeurs des champs du formulaire
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [film, setFilm] = useState('En eaux très troubles')
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])
  

  // Charger les données du localStorage lors de l'initialisation du composant
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('reviewData')) || {};
    setName(savedData.name || '');
    setRating(savedData.rating || 0);
    setComment(savedData.comment || '');
    setFilm(savedData.film || '');
  }, []);

  //recup API
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

useEffect(() => {
    localStorage.setItem('reviewData', JSON.stringify(users));;
  }, [users]);



  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sauvegarder les données dans le localStorage
    const reviewData = { name, rating, comment, film };
    setUsers([...users,reviewData])
    

    

    // Réinitialisation des champs du formulaire après la soumission
    setName('');
    setRating(0);
    setComment('');
    console.log(film)
    
    
  };

  return (
    <>
    
    <div>
      <div className="review-form">
      <h2>Laissez un avis</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Note :</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            <option value={0}>Sélectionnez une note</option>
            <option value={1}>1 étoile</option>
            <option value={2}>2 étoiles</option>
            <option value={3}>3 étoiles</option>
            <option value={4}>4 étoiles</option>
            <option value={5}>5 étoiles</option>
          </select>
        </div>
        <div>
          <label htmlFor="comment">Commentaire :</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div>
            <select
            id="film"
            value = {film}
        
            onChange={(e) => setFilm(e.target.value)
                }
            required
          >
            <option>Sélectionnez un film</option>
            {data.map((el,i) => <option value={el.title} key={i}>{el.title}</option>)}

          
          </select> 

         </div>
        <div>
          <button type="submit">Soumettre</button>
        </div>
      </form>
      </div>
    </div>
    </>
  );
};

export default Form;