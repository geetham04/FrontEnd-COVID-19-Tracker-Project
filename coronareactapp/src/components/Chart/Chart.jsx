import React, { useState, useEffect } from 'react';
import { fetchDailyData, fetchDailyDataPerDay } from '../../api';
import { Line, Bar, Pie, Doughnut, Polar } from 'react-chartjs-2';
import styles from './Chart.module.css';

// functional component
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);
    const [dailyDataPerDay, setDailyDataPerDay] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
            setDailyDataPerDay(await fetchDailyDataPerDay());
        }
        fetchAPI();
    }, []);

// eslint-disable-next-line no-unused-expressions

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
            options={{
                  title: { display: true, text:`Daily Cases Growth` },
                }}
          />) : null
    );

    const BarChart = (
      dailyDataPerDay.length
        ? (
          <Bar
          data={{
              labels: dailyDataPerDay.map(({ date }) => date),
              datasets: [{
                  data: dailyDataPerDay.map(({ confirmed }) => confirmed),
                  label: 'Globally Infected',
                  borderColor: '#3333ff',
                  backgroundColor: 'blue',
                  fill: true
              }]
          }}
          options={{
                  title: { display: true, text:`Daily Infected Cases Timeline` },
                }}
        />) : null
  );

    console.log(confirmed, recovered, deaths);

    const barChart = (
        confirmed
          ? (
            <div id="chart-wrapper">
              <Bar
                data={{
                  labels: [
                    'Infected',
                    'Recovered', 
                    'Deaths'
                    ],
                  datasets: [{
                    label: 'people',
                    backgroundColor: [
                       'rgba(0, 0, 255, 0.7)',
                       'rgba(0, 96, 96, 0.7)',
                       'rgba(255, 0, 0, 0.7)'
                    ],
                    data:[
                      confirmed.value, 
                      recovered.value, 
                      deaths.value
                      ]  
                  }]
                }}
                options={{
                  legend: { display: false }, 
                  title: { display: true, text:`${country} country data in bar chart` },
                }}
             />
             </div>
          ) : null
    )

    const pieChart = (
        confirmed
          ? (
            <div id="chart-wrapper">
              <Pie
                data={{
                  labels: [
                    'Infected',
                    'Recovered', 
                    'Deaths'
                    ],
                  datasets: [{
                    label: 'people',
                    backgroundColor: [
                       'rgba(0, 0, 255, 0.7)',
                       'rgba(0, 96, 96, 0.7)',
                       'rgba(255, 0, 0, 0.7)'
                    ],
                    data:[
                      confirmed.value, 
                      recovered.value, 
                      deaths.value
                      ]  
                  }]
                }}
                options={{
                  legend: { display: false }, 
                  title: { display: true, text:`${country} country data in pie chart` },
                }}
             />
             </div>
          ) : null
    )
    const doughnutChart = (
      confirmed
        ? (
          <div id="chart-wrapper">
            <Doughnut
              data={{
                labels: [
                  'Infected',
                  'Recovered', 
                  'Deaths'
                  ],
                datasets: [{
                  label: 'people',
                  backgroundColor: [
                     'rgba(0, 0, 255, 0.7)',
                     'rgba(0, 96, 96, 0.7)',
                     'rgba(255, 0, 0, 0.7)'
                  ],
                  data:[
                    confirmed.value, 
                    recovered.value, 
                    deaths.value
                    ]  
                }]
              }}
              options={{
                legend: { display: false }, 
                title: { display: true, text:`${country} country data in doughnut chart` },
              }}
           />
           </div>
        ) : null
  )
  const polarChart = (
    confirmed
      ? (
        <div id="chart-wrapper">
          <Polar
            data={{
              labels: [
                'Infected',
                'Recovered', 
                'Deaths'
                ],
              datasets: [{
                label: 'people',
                backgroundColor: [
                   'rgba(0, 0, 255, 0.7)',
                   'rgba(0, 96, 96, 0.7)',
                   'rgba(255, 0, 0, 0.7)'
                ],
                data:[
                  confirmed.value, 
                  recovered.value, 
                  deaths.value
                  ]  
              }]
            }}
            options={{
              legend: { display: false }, 
              title: { display: true, text:`${country} country data in polar chart` },
            }}
         />
         </div>
      ) : null
)

const columnChart = (
  confirmed
    ? (
      <div className="chart">
        <Polar
          data={{
            labels: [
              'Infected', 
              'Recovered', 
              'Deaths'
              ],
            datasets: [{
              label: 'people',
              backgroundColor: [
                 'rgba(0, 0, 255, 0.7)',
                 'rgba(0, 96, 96, 0.7)',
                 'rgba(255, 0, 0, 0.7)'
              ],
              data:[
                confirmed.value, 
                recovered.value, 
                deaths.value
                ]  
            }]
          }}
          options={{
            legend: { display: false }, 
            title: { display: true, text:`Currently showing ${country} country` }
          }}
       /></div>
    ) : null
)
  // const mulcharts = [barChart, pieChart, doughnutChart, polarChart]; 

    return (
        <div className={styles.container}>
          {country ? [barChart, pieChart, doughnutChart, polarChart] : [lineChart, BarChart]}
        </div>       
    )
  }

export default Chart;
