import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const getData = async () => {
    //destructuring [data] from the api with the properties that I only want to use in this case the following..
    const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
    const modifiedData = {
        confirmed,
        recovered,
        deaths,
        lastUpdate,
    }
    return modifiedData
}