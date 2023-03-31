import React, { useState } from "react";

function HomePage(props) {
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
        {/* <FilmsList /> */}
      </div>
    );
  }
  
  export default HomePage;