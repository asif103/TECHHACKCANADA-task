import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/Header/NavBar/NavBar';
import Movies from './components/pages/Movies/Movies';
import Serieses from './components/pages/Serieses/Serieses';
import Homepage from './components/pages/Hompage/Homepage';
import { createContext, useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
export const MovieContext = createContext();
export const SeriesContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(response => response.json())
        .then(data => {
          const allMovies = data.entries.filter(movie => movie.programType === "movie" && movie.releaseYear>= 2010)
          setMovies(allMovies)
        }
          )
      },[]);

      const [series, setSeries] = useState([]);
      useEffect(() => {
          fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
          .then(response => response.json())
          .then(data => {
            const allSeries = data.entries.filter(series => series.programType === "series" && series.releaseYear>= 2010)
            setSeries(allSeries)
          }
            )
        },[]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
    <SeriesContext.Provider value={[series, setSeries]}>
    <Router>
      <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <Homepage></Homepage>
          </Route>
          <Route path="/movies">
            <Movies></Movies>
          </Route>
          <Route path="/series">
            <Serieses></Serieses>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </SeriesContext.Provider>
    </MovieContext.Provider>
  );
}

export default App;
