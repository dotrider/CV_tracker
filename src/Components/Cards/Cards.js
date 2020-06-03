import React from 'react';
//implementing components from material UI
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
//importing styles from =>
import styles from './Cards.module.css'
//couter for digits
import CountUp from 'react-countup'
//classnames for styles => allows to use mulitple class from the styles import and use them in the className prop as a method cx()
import cx from 'classnames'


const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {

if(!confirmed)return 'Loading..'

    console.log('cards', confirmed, recovered, deaths, lastUpdate)
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.one)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {/* new Date().toDateString converts date to readable time */}
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varient='body2'>
                            Cases of COVID
                        </Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.two)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant='h5'>
                        <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varient='body2'>
                            Cases of COVID
                        </Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.three)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant='h5'>
                        <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography varient='body2'>
                            Cases of COVID
                        </Typography>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;