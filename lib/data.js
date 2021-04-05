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
        const data = await axios.get(`${url}/historical/all?lastdays=all`)
        
        const modifiedData = {
            cases       : Object.values(data.data.cases),
            deaths      : Object.values(data.data.deaths),
            recovered   : Object.values(data.data.recovered),
            dates       : Object.keys(data.data.cases),
        } 
        return modifiedData;
    }

    catch (error) {
        console.log(error)
    }

}

export const fetchLocations = async () => {

    try {
        const { data } = await axios.get(`${url}/countries?yesterday=false&twoDaysAgo=false&allowNull=false`);

        const modifiedData = data.map((locationData) => ({
            country     : locationData.country,
            updated     : locationData.updated,
            flag        : locationData.countryInfo.flag,
            coordinate  : [locationData.countryInfo.long,locationData.countryInfo.lat],
            cases       : locationData.cases,
            deaths      : locationData.deaths,
            recovered   : locationData.recovered,
        }))
        return modifiedData
    }

    catch (error) {
        console.log(error)
    }

}