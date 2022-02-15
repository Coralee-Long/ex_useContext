import './App.css';
import {MovieController} from './context/MoviesContext'
import NavBar from './components/NavBar'
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import {ApiController} from './context/ApiContext'

function App() {
  return (
    <div className="App"> 
      <MovieController>
          <ApiController>
          <NavBar />
          <MovieList />
          <AddMovie />
          </ApiController>
      </MovieController>
    </div>
  );
}

export default App;
