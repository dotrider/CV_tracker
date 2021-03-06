import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const getData = async (country) => {
    console.log('indexCountry', country)
    let countryUrl = url;
    //applies only if there is a receiving a country
    if(country){
        countryUrl = `${url}/countries/${country}`;
    }


    //destructuring [data] from the api with the properties that I only want to use in this case the following..
    //const res = await axios.get(url);
    const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(countryUrl);
    const modifiedData = {
        confirmed,
        recovered,
        deaths,
        lastUpdate,
    }
    return modifiedData
}


export const getDailyData = async () => {

    const res = await axios.get(`${url}/daily`)
    console.log('indexChart', res.data)

    return res.data.map((dd) => ({
        confirmed: dd.confirmed.total,
        deaths: dd.deaths.total,
        date: dd.reportDate
    }))

}

export const getCountries = async () => {

    const res = await axios.get(`${url}/countries`)

    console.log('indexCountries', res.data.countries)

    return res.data.countries.map(d => d.name)
}