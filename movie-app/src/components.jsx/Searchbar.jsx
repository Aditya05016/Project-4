import React from 'react'

function SearchBar({searchMovie, setSearchMovie,fetchMovieData}) {
  return (
    <div>
      <div className="input flex justify-center  px-5 lg:px-0 py-5">
        <input
          type="text"
          placeholder='Search here'
          value={searchMovie}
          onChange={(e)=> setSearchMovie(e.target.value)}
          className=' shadow-md bg-gray-200 placeholder-gray-400 rounded-l-lg 
          px-2 py-2 w-80 outline-none border-2 border-gray-500 text-black ' 
        />
        <button
        onClick={fetchMovieData}
          className='bg-[#40407a] px-4 rounded-r-lg text-white shadow-md 
          border-b-2 border-r-2 border-t-2 border-gray-500 '>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar