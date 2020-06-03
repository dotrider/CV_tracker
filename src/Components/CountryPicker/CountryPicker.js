import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { getCountries } from '../../api';

const CountryPicker = () => {
   const [ countries, setCountries ] = useState({})

   console.log('CountryPicer', countries)

    useEffect(() => {
      const fetchData = async () => {
        const data = await getCountries()
        setCountries(data)
      }
      fetchData()
    }, [])

    return(
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect>
                    <option value='global'>
                        Widely
                    </option>
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;