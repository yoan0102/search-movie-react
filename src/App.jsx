import { useEffect, useState } from "react"
import "./App.css"
import SearchSvg from "./assets/search.svg"
import MovieCard from "./components/MovieCard"

//d281ed8b

const API_URL = "http://www.omdbapi.com/?apikey=d281ed8b"

const App = () => {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState("")
  useEffect(() => {
    searchMovies("Spiderman")
  }, [])

  const searchMovies = async (title) => {
    const resp = await fetch(`${API_URL}&s=${title}`)
    const data = await resp.json()
    setMovies(data.Search)
  }

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          type='text'
          name='title'
          placeholder='Searchfor movies'
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        <img
          src={SearchSvg}
          alt='Icon search'
          onClick={() => searchMovies(movie)}
        />
      </div>

      <div className='container'>
        {movies.length > 0 ? (
          movies.map((item) => <MovieCard item={item} key={item.imdbID} />)
        ) : (
          <h1>No hay Movies</h1>
        )}
      </div>
    </div>
  )
}

export default App
