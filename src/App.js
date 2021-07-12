import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/Header/NavBar/NavBar';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            {/* <About /> */}
          </Route>
          <Route path="/movies">
            <Movies></Movies>
          </Route>
          <Route path="/series">
            {/* <Home /> */}
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
