import React from 'react';
//implementing components from material UI
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
//importing styles from =>
import styles from './Cards.module.css'

const Cards = (props) => {

    console.log('cards', props)
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant='h5'>
                            LIVE DATA
                        </Typography>
                        <Typography color="textSecondary">
                            LIVE DATE
                        </Typography>
                        <Typography>
                            Case of COVID
                        </Typography>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;