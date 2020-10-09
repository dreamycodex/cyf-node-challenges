import React from 'react';
import Title from "./Title";
import DropdownMenu from "./DropdownMenu";
import Categories from "./Categories";
import Table from "./Table";
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <hr/>
      <br/>
      <DropdownMenu />
      <br/>
      <Categories />
      <Table />
    </div>
  );
}

export default App;
