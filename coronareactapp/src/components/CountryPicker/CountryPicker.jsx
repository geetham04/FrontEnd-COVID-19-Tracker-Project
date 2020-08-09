// importing libraries
import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

// functional component
const CountryPicker = ({ dealCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            // fetching countries from the API
            setFetchedCountries(await fetchCountries());
        }
        fetchCountriesAPI();
    }, [setFetchedCountries]);

    // console.log(fetchedCountries);
    // countrypicker component and it works using the formcontrol and nativeselect from materialUI, there fetching the countries from API
    // Fetching the countries from API. Once the country chosen, it goes back to app.js
    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => dealCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
