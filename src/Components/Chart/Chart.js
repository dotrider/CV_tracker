import React, { useEffect, useState } from 'react';
import { getDailyData } from '../../api'
//importing charts - 'react-chartjs-2' => wrapper for chartjs
import { Line, Bar } from 'react-chartjs-2';
//styles
import styles from './Chart.module.css'

//for BarChart using data 
const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    const [ dailyData, setDailyData ] = useState({});
    // console.log('Chart', dailyData)
    console.log('data from app to chart', confirmed)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDailyData();
            setDailyData(data)
        }
            fetchData()
    }, [])



    //Setting up BarChart
    const barChart = (
        confirmed?
            <Bar
            //Bar takes data and options
                data={{
                    //X axis bars (title for each bar)
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    //Filling up with data y axis
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgb(255, 247, 0)', 'rgb(255, 115, 0)', 'rgb(255, 0, 0)'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                //Title
                options={{
                    legend: {display: false},
                    title: { display: true, text: `Status in ${country}`}
                }}
            />: null
    )



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
            { country? barChart : lineChart}
        </div>
    )
}

export default Chart;