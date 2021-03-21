import axios from "axios"

const url = 'https://disease.sh/v3/covid-19'

export const fetchAllData = async () => {

    try {
        const { data : { cases, deaths, recovered, updated} } = await axios.get(`${url}/all`);

        return { cases, deaths, recovered, updated }
    }

    catch (error) {
        console.log(error)
    }

}

export const fetchHistoricalData = async () => {

    try {
        const { data : { cases, deaths, recovered } } = await axios.get(`${url}/historical/all?lastdays=all`)
        return { cases, deaths, recovered };
    }

    catch (error) {
        console.log(error)
    }

}