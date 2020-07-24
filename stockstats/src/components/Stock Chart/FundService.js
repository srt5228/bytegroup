import axios from 'axios'

// This file connects to the Flask server and imports the funds API data
export default class FundService {
    importData(symbol) {
        return axios.get(`/api/funds/${symbol}`)
        .then(response => {
            const data = response.data;   
            return data
        })
    }
}