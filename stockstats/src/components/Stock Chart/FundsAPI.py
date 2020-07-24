import requests
from model.entities.Funds import Fund
import pandas as pd
import matplotlib.pyplot as plt
import operator
import json

#in src folder, run python3 -m model.dao.FundsAPI

class Funds_API:
    """This class obtains stock times series data from the alpha vantage api through rapidapi.com """

    @staticmethod
    def getMonthlyTimeSeries(symbol):
        url = "https://alpha-vantage.p.rapidapi.com/query"

        querystring = {
            "symbol": {symbol},
            "function": "TIME_SERIES_MONTHLY",
            "datatype": "json"
        }

        headers = {
            'x-rapidapi-host': "alpha-vantage.p.rapidapi.com",
            'x-rapidapi-key': "3468d12ecdmsh8fa3cbbec740474p12dd09jsn64e4043b715c"
        }

        response = requests.get(url, headers=headers, params=querystring)
        json_response = response.json()
        
        funds_list = []
        
        if response.status_code != 200:
            print("Not found")
        else:
            search_results = json_response['Monthly Time Series'] 
            results = search_results.items()

            for item in results:
                fund = Fund(symbol)
                fund.date = item[0]
                key = fund.date
                fund.open_price = float(item[1]['1. open'])
                fund.close_price = float(item[1]['4. close'])

                funds_list.append(fund)

        # use operator since it's faster than lambda 
        # get the date column to sort the array by
        key = operator.attrgetter("date") 
        funds_list.sort(key=key)
        
        return funds_list



    @staticmethod
    def getDailyTimeSeries(symbol):

        url = "https://alpha-vantage.p.rapidapi.com/query"

        querystring = {
            "symbol": {symbol},
             "function":"TIME_SERIES_DAILY",
             "datatype": "json",
	         "outputsize": "full"
        }

        headers = {
            'x-rapidapi-host': "alpha-vantage.p.rapidapi.com",
            'x-rapidapi-key': "3468d12ecdmsh8fa3cbbec740474p12dd09jsn64e4043b715c"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)

        json_response = response.json()

        funds_list = []
        
        if response.status_code != 200:
            print("Not found")
        else:
            search_results = json_response['Time Series (Daily)']
            results = search_results.items()

            for item in results:
                fund = Fund(symbol)
                fund.date = item[0]
                key = fund.date
                fund.open_price = float(item[1]['1. open'])
                fund.close_price = float(item[1]['4. close'])

                funds_list.append(fund)

        # use operator since it's faster than lambda 
        # get the date column to sort the array by
        key = operator.attrgetter("date") 
        funds_list.sort(key=key)
        
        return funds_list
       
