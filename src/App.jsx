import React, { useState } from "react";
import { BrowserRouter as Router, NavLink, Routes, Route} from "react-router-dom";
import { HomePage, FilmsPage } from "./pages";

function App(props) {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");
  let onSubmit = (event) => {
    event.preventDefault();
    let newList = [...list, text];
    setList(newList);
    setText("");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/films" element={<FilmsPage />}></Route>
      </Routes>
      <nav>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/films">FILMS</NavLink></li>
      </nav>
    <div>
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit" text="add">
          Submit
        </button>
      </form>
      <ul>
          {list.map((item, index) => {
            return <li key={index}> {item} </li>;
          })}
      </ul>
    </div>
    </Router>
  );
}

export default App;
