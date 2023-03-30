import React, { useState } from "react";
import "./App.css";
import FilmsList from "./components/filmsList";
// import logo from './logo.svg';

// React Intro exercise
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>React Header</h1>
//         <p>
//           React is so cool!
//         </p>
//         <p>We are learning some new functionality in React.</p>
//         <ul>
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
//         </ul>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
      <FilmsList />
    </div>
  );
}

export default App;
