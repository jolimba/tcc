import './App.css';
import CardItem from './components/card/CardItem'
import Menu from './components/navbar/Menu'
import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <div className="body">
        <CardItem/>
      </div>
    </div>
  );
}

export default App;
