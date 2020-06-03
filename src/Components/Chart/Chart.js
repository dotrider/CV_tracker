import React, { useEffect, useState } from 'react';
import { getDailyData } from '../../api'
//importing charts - 'react-chartjs-2' => wrapper for chartjs
import { Line, Bar } from 'react-chartjs-2';
//styles
import styles from './Chart.module.css'


const Chart = () => {
    const [ dailyData, setDailyData ] = useState({});
    console.log('Chart', dailyData)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDailyData();
            setDailyData(data)
        }
            fetchData()
    }, [])



    //Setting up Charts
    const lineChart = (
        dailyData[0]? 
        // console.log('lineChart', dailyData)
        <Line
            data={{
                //bottom x axis (dates)
                labels: dailyData.map((d) => d.date),
                //Filling lineChart with info from api
                datasets: [{
                    //getting info over time on cases
                    data: dailyData.map((c) => c.confirmed),
                    label: 'Positive',
                    borderColor: 'yellow',
                    fill: true
                }, {
                    data: dailyData.map((d) => d.deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    fill: true
                }]
            }}
        />: null
    );


    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;