import React from 'react';
import Button from '@mui/material/Button';
import { useHistory, useParams} from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useState, useEffect} from "react";

export function MovieDetails({movies}) {
  const { id } = useParams();
  //  const [movie, setMovie] = useState([id]);
  const movie=movies([id])
  console.log(movie);
  // const getMovie=()=>{
  //      fetch(`https://61d92d6dce86530017e3ca26.mockapi.io/movies/${id}`,{
  //        method:"GET",
  //      }).then((data)=>data.json()) 
  //        .then((mv)=>setMovie(mv));
  // };
  // useEffect(getMovie, [id]);
  const history = useHistory();
  return (
    <div>
      <iframe 
      width="582"
        height="327"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className='movie-details'>
        <div className='movie-specs'>
          <h3 className='movie-name'>{movie.name}</h3>
          <p className='movie-rating'>{movie.rating}</p>
        </div>
        <p className='movie-summary'>{movie.summary}</p>
        <Button variant="outlined" onClick={() => history.goBack()} startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
