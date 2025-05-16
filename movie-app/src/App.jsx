import React, { useState } from 'react';
import { Navbaar } from './components.jsx/Navbaar';
import Searchbar from './components.jsx/Searchbar';
import MovieCard from './components.jsx/MovieCard';

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      const data = await res.json();
      setAllMovieData(data.Search || []); // important fix here
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbaar />
      <div className="bg">
        <Searchbar 
          searchMovie={searchMovie} 
          setSearchMovie={setSearchMovie} 
          fetchMovieData={fetchMovieData}
        />
        <MovieCard 
          allMovieData={allMovieData} 
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
