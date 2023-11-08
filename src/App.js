import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';


function getMonthlyScan(year, month) {

  let result = fetch(`http://localhost:3001/monthlyScan/${year}/${month}`)
    .then(data => data.json())
  
  return result;
}

function App() {
  const [monthlyScan, setMonthlyScan] = useState([]);

  const fetchMonthlyScan =  () => {
    fetch(`http://localhost:3001/monthlyScan/2023/10`)
      .then(data => {return data.json()})
      .then(data => {
        console.log(Object.entries(data));
        setMonthlyScan(Object.entries(data));
      })
  }
  console.log(monthlyScan);

  useEffect(() => {
    fetchMonthlyScan();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {monthlyScan.map((item, index) => {
            return <li key={index}>{item[0]}: {item[1]}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
