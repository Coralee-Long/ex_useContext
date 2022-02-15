import { useContext } from "react";
import { MovieContext } from "../context/MoviesContext";


const MovieList = ()=> {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <>
            {movies.map((movie, id) => {
                return(
                    <div key={id} className="movieListing"
					>
                    <h3>{movie.name}</h3>
                    <p>{movie.price}</p>
                    </div>
                )
            })}
        </>
    )

}

export default MovieList