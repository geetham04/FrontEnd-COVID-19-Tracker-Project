// importing libraries, components, styles and Image
import React from 'react';

import { Cards, Chart, CountryPicker, Timer, Header, Footer } from './components';
import styles from './App.module.css';
import { fetchData, fetchLastUpdate } from './api';
import { TinyButton  as ScrollUpButton } from "react-scroll-up-button";

import covidImage from './images/covidlogo.png';


// creating class based component
class App extends React.Component {
    // Initial States
    state = {
        data: {},
        country: ''
    }
    // componentDidMount - making a request to fetchData, which is in the API, returning the data needed
    // once after data fetched, setting it to this.setState
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }
    // Getting the country as a parameter, making the request one more time to the fetchData API.
    // This time, with the fetchedData, it also changes the country 
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
        // returns header with current time,
        // greeting according to current time
        // title image
        // last updated date with time
        // infected, recovered and deaths cases data in cards
        // country picker dropdown
        // charts
        // footer
        // scroll up button to go to page top
        return (
            <div className={styles.container}>
                <Header />
                {
                hour>=12 ? hour>=16 ? 
                <h1>Good Evening, Welcome to Coronavirus tracking application</h1> : <h1>Good Afternoon, Welcome to Coronavirus tracking application</h1> : <h1>Good Morning, Welcome to Coronavirus tracking application</h1>
                }
                <img className={styles.image} src={covidImage} alt="COVID-19" />
                <fetchLastUpdate />
                <Cards data={data} />
                <CountryPicker dealCountryChange={this.dealCountryChange} />
                <Chart data={data} country={country} />
                <Footer />
                <ScrollUpButton />
            </div>
        );
    }
}

export default App;
 
