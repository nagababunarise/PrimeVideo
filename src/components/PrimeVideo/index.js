import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionMovies = 'ACTION'
const comedyMovies = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovies,
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovies,
  )
  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="movies-content">
        <h1>Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
