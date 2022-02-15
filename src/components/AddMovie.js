import { useContext, useState } from "react";
import { MovieContext } from "../context/MoviesContext";


const AddMovie = () => {
        const [movies, setMovies] = useContext(MovieContext)
        const [movieName, setMovieName] = useState('')
        const [moviePrice, setMoviePrice] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault()
            setMovies([...movies, {name : movieName, price : `${moviePrice}$`}])
        }


    return(
        <>
            <form onSubmit={handleSubmit} >
                <input value={movieName} placeholder='enter name' onChange={(e) => setMovieName(e.target.value)}  />
                <input value={moviePrice} type='number' onChange={(e) => setMoviePrice(e.target.value)} />
                <button type='submit'>
                    Add Movie
                </button>
            </form>
        </>
    )
}

export default AddMovie