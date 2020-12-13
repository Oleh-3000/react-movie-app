import React from 'react';
import './App.scss';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchPage from "../../pages/SearchPage";
import MoviePage from "../../pages/MoviePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact>
          <SearchPage/>
        </Route>
        <Route path='/movie-page/:id' exact>
          <MoviePage/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
