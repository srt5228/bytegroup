import axios from 'axios'

export default class ChartService {
    importData(symbol) {
        const GET_API_KEY = 'ktokygsfnkoxh6v1sdsuer8bljv9hlq2genrsa5t'
        return axios.get(`https://stocknewsapi.com/api/v1?tickers=${symbol}&items=50&token=${GET_API_KEY}`) //&sortby=oldestfirst
            .then(response => {
                const data = response.data;
                // console.log(data)
                return data
            })
    }
}