import React, { Component } from 'react';
import './App.css';
import FilmsList from './components/filmsList';
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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(event){
    event.preventDefault()
    let newList = [...this.state.list, this.state.text]
    this.setState({
      list: newList,
      text: "",
    })
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit = {this.onSubmit}>
          <input 
          type="text" 
          name="text"
          id="text"
          value={this.state.text}
          onChange={(event) => 
            this.setState({
              text: event.target.value,
            })}/>
              <button type="submit" text="add">Submit</button>
        </form>
        <ul>
          <li>{this.state.list.map((item, index) => {
            return <li key={index}> {item} </li>
          }
          )}</li>
        </ul>
        <FilmsList/>
      </div>
    );
  }
}

export default App;
