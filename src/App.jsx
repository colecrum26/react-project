import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route} from "react-router-dom";
import { HomePage, FilmsPage } from "./pages";

function App(props) {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/films" element={<FilmsPage />}></Route>
      </Routes>
      <nav>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/films">Films</NavLink></li>
      </nav>
    </Router>
  );
}

export default App;
