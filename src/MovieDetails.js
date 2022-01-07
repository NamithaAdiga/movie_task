import React from 'react';
import Button from '@mui/material/Button';
import { useHistory, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  console.log(movies);
  const history = useHistory();
  return (
    <div>
      <iframe 
      width="582"
        height="327"
        src={movies.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className='movie-details'>
        <div className='movie-specs'>
          <h3 className='movie-name'>{movies.name}</h3>
          <p className='movie-rating'>{movies.rating}</p>
        </div>
        <p className='movie-summary'>{movies.summary}</p>
        <Button variant="outlined" onClick={() => history.goBack()} startIcon={<ArrowBackIosIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
