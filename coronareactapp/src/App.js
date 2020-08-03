// importing libraries, components, styles and Image
import React from 'react';

import { Cards, Chart, CountryPicker, Header, Footer } from './components';
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
                <Header />
                <img className={styles.image} src={covidImage} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker dealCountryChange={this.dealCountryChange} />
                <Chart data={data} country={country} />
                <Footer />
            </div>
        );
    }
}

export default App;
 
