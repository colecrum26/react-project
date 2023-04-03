import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route} from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages";

function App(props) {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/films" element={<FilmsPage />}></Route>
        <Route path="film/:id" element={<SingleFilmPage />}></Route>
      </Routes>
      <nav>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/films">Films</NavLink></li>
      </nav>
    </Router>
  );
}

export default App;
