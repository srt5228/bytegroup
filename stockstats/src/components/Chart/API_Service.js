import axios from 'axios'

export default class ChartService {
    importData(symbol) {
        return axios.get(`https://stocknewsapi.com/api/v1?tickers=${symbol}&items=10&token=ktokygsfnkoxh6v1sdsuer8bljv9hlq2genrsa5t` )
        .then(response => {
            const data = response.data;   
            return data
        })
    }
}