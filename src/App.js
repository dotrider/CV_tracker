import React, { useEffect, useState } from 'react';
//Created Index file to import clean component structure
import { Card, Chart, CountryPicker } from './Components'
//styles => App.module.css file
import styles from './App.module.css'
import { getData } from './api'
import './App.css';

function App() {

  const [data, setData] = useState({}),
        [country, setCountry] = useState('')
  console.log('data', data)
  console.log('appCountry', country)

   useEffect(() => {
    const fetchData = async () =>{
     const data = await getData()
     setData(data)
    } 
    fetchData()
  }, [])

const getCountry = async (c) => {
  setCountry(c)
  const getCountryData = await getData(c)
  console.log('app', getCountryData)
  setData(getCountryData)
 
}




  return (
    <div className={styles.container}>
      <Card data={data}/>
      <CountryPicker getCountry={getCountry}/>
      <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
