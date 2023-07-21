import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

// Importing different components here
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
