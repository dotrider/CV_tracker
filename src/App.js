import React, { useEffect } from 'react';
//Created Index file to import clean component structure
import { Card, Chart, CountryPicker } from './Components'
//styles => App.module.css file
import styles from './App.module.css'
import { getData } from './api'
import './App.css';

function App() {

   useEffect(() => {
   const fetchData = async () =>{
    const data = await getData()
    console.log(data)
   } 
   fetchData()
  }, [])


  return (
    <div className={styles.container}>
      <Card/>
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;
