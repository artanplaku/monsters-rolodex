import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters:[
       {
        name:'Critter',
        id: '1234'
      },

       {
        name:'Serpent',
        id: '12345',
      }, 

      {
        name:'Frank',
        id: '12346',
      },
      {
        name:'Beez',
        id: '12347',
      }
    ]
    }
  }

  render(){
  return (
    <div className="App">{
      this.state.monsters.map((monster)=>{
        return <h1 key={monster.id}>{monster.name}</h1>
      })
    }
    </div>
  
  );
}
}

export default App;
