import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

// functional component
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length
          ? (
            <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.7)',
                    fill: true
                }],
            }}
          />) : null
    );

    console.log(confirmed, recovered, deaths);

    const barChart = (
        confirmed
          ? (
              <Bar
                data={{
                  labels: ['Infected', 'Recovered', 'Deaths'],
                  datasets: [{
                    label: 'people',
                    backgroundColor: [
                       'rgba(0, 0, 255, 0.7)',
                       'rgba(0, 96, 96, 0.7)',
                       'rgba(255, 0, 0, 0.7)'
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]  
                  }]

                }}
                options={{
                  legend: { display: false }, 
                  title: { display: true, text:`Currently showing ${country} state` }
                }}
             />
          ) : null
    )
    return (
        <div className={styles.container}>
          {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;