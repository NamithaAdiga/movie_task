import React from 'react';
import { Movie } from "./Movie";


export function MovieList({movies, setMovieList}) {
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary },index ) => (
        <Movie 
        key={index}
        deleteButton={<button  onClick={()=>{
            console.log("deleting movie...");
            const deleteIndex=index;
            const remainingMovies=movies.filter(
                (mv,idx)=>{
                  console.log({deleteIndex,idx,"deleteIndex !== idx": deleteIndex!== idx
                });
                  return deleteIndex !== idx;
              });
                console.log(movies, remainingMovies);
                 setMovieList(remainingMovies);
        }}
     >Delete</button>}
        id={index}
        name={name}
         poster={poster} 
         ratings={rating} 
         summary={summary} />
      ))}      
    </div>
  );
}


