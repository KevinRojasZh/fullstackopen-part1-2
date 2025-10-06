import axios from "axios"

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const urlSearchCountry = 'https://studies.cs.helsinki.fi/restcountries/api/name/'


const getAll = () => {
    const allCountries = axios.get(baseURL)
    return allCountries.then(countries => countries.data)
    
}


const getCountry = async (country)=> {
    debugger;
    const infoCountry =  await axios.get(`${urlSearchCountry}${country}`)
    return infoCountry.data
}


export default {getAll, getCountry }