import './App.css';
// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/cardlist/Cardlist';
import SearchBox from './components/searchbox/SearchBox.jsx'


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  //more efficient to put filteredMonsters in another useEffect 
  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters)
    //filter these whenever the monsters or searchField changes 
    console.log('effect is firing')
  }, [monsters, searchField])


  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)
      }

  return (
    <div className="App">
      <h1 className='appTitle'>Monsters Rolodex</h1>
     <SearchBox
     className='monsters-search-box'
     onSearchChange={onSearchChange}
     placeholder='search monsters'
     />
    <CardList filteredMonsters={filteredMonsters}/> 

    </div>
  
  );
}
export default App;

