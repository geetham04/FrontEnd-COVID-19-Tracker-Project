// importing libraries, components, styles and Image
import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import covidImage from './images/covidlogo.png';


// creating class based component
class App extends React.Component {
    // Initial States
    state = {
        data: {},
        country: ''
    }
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    dealCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
        
        // console.log(fetchedData);
        
        // console.log(country);

    }
    render() {
        const date = new Date();
        const hour = date.getHours();
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                {
                hour>=12 ? hour>=16 ? 
                <h1>Good Evening, Welcome to Coronavirus tracking application</h1> : <h1>Good Afternoon, Welcome to Coronavirus tracking application</h1> : <h1>Good Morning, Welcome to Coronavirus tracking application</h1>
                }
                <img className={styles.image} src={covidImage} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker dealCountryChange={this.dealCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;
 
