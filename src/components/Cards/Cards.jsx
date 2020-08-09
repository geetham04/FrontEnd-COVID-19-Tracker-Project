import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import ClassNames from 'classnames';
import styles from './Cards.module.css';

// functional component
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
        return 'Loading...';
    }
const lastUpdated = 
      <Typography color="textPrimary" variant="caption" display="block" align='center'>
        Last Updated at {new Date(lastUpdate).toLocaleString()}
      </Typography>;    
    
    return (
        <div className={styles.container}>
          {lastUpdated},
          <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={ClassNames(styles.card, styles.infected)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Infected
                </Typography>
                <Typography variant="h5">
                    <CountUp
                      start={0}
                      end={confirmed.value}
                      duration={2.5}
                      separator=","
                    />
                </Typography>
                {/* <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
                </Typography> */}
                <Typography variant="body2">
                Number of active cases of COVID-19
                </Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={ClassNames(styles.card, styles.recovered)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Recovered
                </Typography>
                <Typography variant="h5">
                    <CountUp
                      start={0}
                      end={recovered.value}
                      duration={2.5}
                      separator=","
                    />
                </Typography>
                {/* <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
                </Typography> */}
                <Typography variant="body2">
                Number of recoveries from COVID-19
                </Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={ClassNames(styles.card, styles.deaths)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Deaths
                </Typography>
                <Typography variant="h5">
                    <CountUp
                      start={0}
                      end={deaths.value}
                      duration={2.5}
                      separator=","
                    />
                </Typography>
                {/* <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
                </Typography> */}
                <Typography variant="body2">
                Number of deaths caused by COVID-19
                </Typography>
              </CardContent>
            </Grid>
          </Grid>

        </div>
    )
}

export default Cards;