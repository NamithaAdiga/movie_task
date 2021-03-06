// import App from './App';
import './App.css';
import Initial_Movies from './data'
import React, { useState, useEffect } from 'react';
import { MovieList } from './MovieList';
 import Button from '@mui/material/Button';
 import TextField from '@mui/material/TextField';
import { Switch, Route, useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MovieDetails } from './MovieDetails';
import { Home } from './Home';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import { CardActions, CardContent } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [movielist, setMovieList] = useState([Initial_Movies]);
  //  const getMovies=()=>{
  //    fetch("https://61d92d6dce86530017e3ca26.mockapi.io/movies",{
  //      method:"GET",
  //    }).then((data)=>data.json())
  //    .then((mvs)=>setMovieList(mvs));
  //  }
  //  useEffect(getMovies,[]);
  const history=useHistory();
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{minHeight:'100vh'}}elevation={0} >
    <div className="App">
      <AppBar position="static">
      <Toolbar>
      <Button color="inherit" onClick={()=>history.push("/home")}>Home</Button>
      <Button color="inherit"onClick={()=>history.push("/addmovie")}>Addmovie</Button>
      <Button color="inherit" onClick={()=>history.push("/movies")} >Movies</Button>
      <Button sx={{marginLeft:"auto"}}
      color="inherit" onClick={()=>setMode(mode === "light"? "dark" : "light")}>
        {mode === "light"? "dark" : "light"} mode</Button>
      </Toolbar>
      </AppBar>
     <section className="route-container">
     <Switch>
      <Route path="/addmovie">
      <Add movielist={movielist} setMovieList={setMovieList} /> 
      </Route>
      <Route path="/movie/edit/:id">Edit Movie</Route>
      <Route path="/movies/:id">
        <MovieDetails />
      </Route>
      <Route path="/movies">
      <MovieList movies={movielist} setMovieList={setMovieList} />
      </Route>
      <Route path="/home">
      <Home />
      </Route>
      </Switch>
      
      </section>
    </div>
    </Paper>
    </ThemeProvider>
  );
 }
 export function Movie({ name, poster, ratings, summary, deleteButton,editButton, id }) {
  const [show, setShow] = useState(true);
  const history = useHistory();
  const descriptionStyles = { display: show ? "block" : "none" };
  return (
    <>
      <Card className='movie-container'>
        <img src={poster} alt="poster" className="movie-poster"></img>
        <CardContent>
          <div className='movie-specs'>
            <h1 className="user-name">{name}
              <IconButton onClick={() => history.push(`/movies${id}`)}
                color="primary" aria-label="movie-details">
                <InfoIcon />
              </IconButton>
              <IconButton onClick={() => setShow(!show)}
                variant="outlined" color="primary" aria-label="add to shopping cart">
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </h1>
            {ratings >= 8.5 ? (
              <h4 className="green">???{ratings}</h4>
            ) : (
              <h4 className="red">???{ratings}</h4>
            )}
          </div>

          {show ? <p className='movie-summary'>{summary}</p> : " "}
        </CardContent>
        <CardActions>
          <Counter />
          {deleteButton}
          {editButton}
        </CardActions>
      </Card>
    </>
  );
}

// function Addmovie(){
//   // const [movie, setMovie] = useState(" ")
//   return(
//     <div>
     
//     </div>
//   )
   
// }
function Add({movielist,setMovieList}){
  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [rating, setRating] = useState("")
  const [summary, setSummary] = useState("")
  const history=useHistory();
  return(
    <div>
    <TextField  value={name}onChange={(event)=>setName(event.target.value)}
    placeholder='enter a name' id="standard-basic" label="name" variant="standard" />
    <TextField value={poster}onChange={(event)=>setPoster(event.target.value)}
    placeholder='enter a poster' id="standard-basic" label="poster" variant="standard" />
   <TextField  value={rating}onChange={(event)=>setRating(event.target.value)}
    placeholder='enter a rating' id="standard-basic" label="rating" variant="standard" />
  <TextField value={summary}onChange={(event)=>setSummary(event.target.value)}
    placeholder='enter a summary' id="standard-basic" label="summary" variant="standard" />
     <Button
      onClick={()=>{
      const newMovie={name,poster,rating,summary};
      console.log(newMovie);
      setMovieList([...movielist,newMovie])

      history.push("/movies");
    }} variant="outlined">Addmovie</Button> 
    </div>
  )
}

