import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      name: 'Artan'
    }
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name}
        </p>
        <button onClick={()=>{
          this.setState({name:"hio"})
        }}></button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
