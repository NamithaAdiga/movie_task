import React from 'react';
import { Movie } from "./App";
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect} from "react";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

export function MovieList({movies, setMovieList}) {
  // const getMovies=()=>{
  //   fetch("https://61d92d6dce86530017e3ca26.mockapi.io/movies",{
  //     method:"GET",
  //   }).then((data)=>data.json())
  //   .then((mvs)=>setMovieList(mvs));
  // };
  // useEffect(getMovies, [setMovieList]);
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary },index ) => (
        <Movie 
        key={index}
        deleteButton={<DeleteIcon  onClick={()=>{
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
     >Delete</DeleteIcon>}
     editButton={
      <button
       onClick={()=>{}} 
       aria-label="edit movie">
         <EditIcon />
        </button>
     }
        id={index}
        name={name}
         poster={poster} 
         ratings={rating} 
         summary={summary} />
      ))}      
    </div>
  );
}


