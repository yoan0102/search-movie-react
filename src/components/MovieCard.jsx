const MovieCard = ({ item, movie }) => {
  return (
    <div className='movie'>
      <div>
        <p>{item.Year}</p>
      </div>
      <div>
        <img
          src={
            item.Poster !== "N/A"
              ? item.Poster
              : "https://via.placeholder.com/400"
          }
          alt={item.title}
        />
      </div>
      <div>
        <span>{item.Type}</span>
        <h3>{item.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard
