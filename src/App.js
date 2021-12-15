
import './App.css';
import movies from './data'

export default function App() {
  return (
    <div className="App">
      <div className="movie-list">
        {movies.map(({ name, poster, rating, summary }) => (
          <Movie name={name} poster={poster} ratings={rating} summary={summary} />
        ))}
      </div>
    </div>
  );
}

function Movie({ name, poster, ratings, summary }) {
  return (
    <>
      <div className='movie-container'>
      <img src={poster} alt="poster" className="movie-poster"></img>
      <div className='movie-specs'>
      <h1 className="user-name">{name}</h1>
      {ratings >= 8.5 ? (
        <h4 className="green">⭐{ratings}</h4>
      ) : (
        <h4 className="red">⭐{ratings}</h4>
      )}
      </div>
 <p className='movie-summary'>{summary}</p>
 </div>
 
    </>
  );
}
