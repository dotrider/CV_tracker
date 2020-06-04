import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { getCountries } from '../../api';

const CountryPicker = (props) => {
   const [ countries, setCountries ] = useState([])

   console.log('CountryPicker', countries)

    useEffect(() => {
      const fetchData = async () => {
        const data = await getCountries()
        setCountries(data)
      }
      fetchData()
    }, [])


    const mappedData = countries.map((c, i) => <option key={i} value={c}>{c}</option>)
    return(
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue='' onChange={e => props.getCountry(e.target.value)}>
                    <option value='global'>
                        World Wide
                    </option>
                    {mappedData}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;