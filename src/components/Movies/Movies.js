import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(response => response.json())
        .then(data => setMovies(data.entries))
      },[]);
      const allMovies = movies.filter(movie => movie.programType === "movie")
      console.log(allMovies)
    return (
        <div>
            {
            allMovies.map(m=> <h1>{m.programType}</h1>)
            }
            
        </div>
    )
}

export default Movies
