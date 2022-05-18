import {useState} from 'react';
import axios from 'axios';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';


const baseUrl = 'https://www.metaweather.com/api/location';
const crossDomain ='https://the-ultimate-api-challenge.herokuapp.com';
const requestUrl =`${crossDomain}/${baseUrl}`;



const useForcecast = () => {
    const [isError, setError] = useState(false);

    const [isLoading, setLoading] = useState(false);

    const [forecast, setForecast] = useState(null);
//get the woeid
    const getWoeid = async (location)=> {
        const {data} = await axios(`${requestUrl}/search`, {params: {query: location}});
        
        if (!data || data.length === 0) {
            console.log("Empty1")

            setError('There is no such a location');
            setLoading(false)
            return;
        }


        return data[0];
    };
// get forecast 
    const getForecast = async (woeid)=>{
        const {data} = await axios(`${requestUrl}/${woeid}`);
        if (!data || data.lenght === 0) {
            console.log("Empty2")
            setError('Soemthing went wrong');            
            setLoading(false)

            return;
        }
        return data;
    };

    const gatherForecastData = (data) =>{
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetail = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDay = getUpcomingDaysForecast(data.consolidated_weather);
        setForecast({currentDay, currentDayDetail, upcomingDay});
        setLoading(false)
    }
    // call api
    const submitRequest = async (location) =>{
        setLoading(true);
        setError(false);
        const response = await getWoeid(location);
        if(!response?.woeid) return;
        const data = await getForecast(response.woeid);
        if(!data){ return;};
        console.log({data});
        gatherForecastData(data);
    }

    const resetSearch = () =>{
        setForecast(false)
    }
    return{
        isError,
        isLoading,
        forecast,
        submitRequest,
        resetSearch
    }
}
export default useForcecast