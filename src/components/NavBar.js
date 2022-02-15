import { useContext } from "react"
import { ApiContext } from "../context/ApiContext"
import { MovieContext } from "../context/MoviesContext"



const NavBar = () => {

    const [movies, setMovies] = useContext(MovieContext)
    const [users, setUsers] = useContext(ApiContext)
    console.log(users)
    return(
        <>
		 <h1>Welcome to the Cinema!</h1> 
		<h2>There are {movies.length} movies for {users.length} spectators</h2> 
    </>
    )
}

export default NavBar