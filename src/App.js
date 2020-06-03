import React, { useEffect, useState } from 'react';
//Created Index file to import clean component structure
import { Card, Chart, CountryPicker } from './Components'
//styles => App.module.css file
import styles from './App.module.css'
import { getData } from './api'
import './App.css';

function App() {

  const [data, setData] = useState({})
  console.log('data', data)

   useEffect(() => {
   const fetchData = async () =>{
    const data = await getData()
    setData(data)
   } 
   fetchData()
  }, [])


  return (
    <div className={styles.container}>
      <Card data={data}/>
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;
