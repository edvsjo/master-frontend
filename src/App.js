import React, { useEffect, useState } from 'react';
import MonthlyScanPage from './Pages/monthlyScan'; // Import the MonthlyScanPage component

function getMonthlyScan(year, month) {
  let result = fetch(`http://localhost:3001/monthlyScan/${year}/${month}`)
    .then(data => data.json())
  
  return result;
}

function App() {
  // const [monthlyScan, setMonthlyScan] = useState([]);

  // const fetchMonthlyScan =  () => {
  //   fetch(`http://localhost:3001/monthlyScan/2023/10`)
  //     .then(data => {return data.json()})
  //     .then(data => {
  //       // console.log(Object.entries(data));
  //       setMonthlyScan(Object.entries(data));
  //     })
  // }

  // useEffect(() => {
  //   fetchMonthlyScan();
  // }, []); // Add an empty dependency array to the useEffect so it only runs once on component mount

  return (
    <MonthlyScanPage /> // Use the MonthlyScanPage component and pass the monthlyScan state as a prop
  );
}

export default App;
