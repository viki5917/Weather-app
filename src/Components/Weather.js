import React, { useContext } from 'react';
import moment from 'moment';
import '../App.css'
import { Locationdetails } from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater ,faWind} from '@fortawesome/free-solid-svg-icons';



const Weather = () => {
  
  const {location,setLocation,weatherData}=useContext(Locationdetails)
  
  
    
    


  return (
    <div className="container">
        {weatherData &&
      
      <div className='subContainer sub1'>
            <>
            <div className="weather-info">
              <h3>Humidity</h3>
                <div className="temperature">
                  {weatherData.current.humidity}
                </div>
                <span className='windspeed'>%</span>
                <div className="description">
                  <FontAwesomeIcon icon={faWater} />
                </div>
            </div>
            </>
      </div>
      
    }
     
        <div className='subContainer sub2'>
            {/* <input type='search' value={location} onChange={e=>setLocation(e.target.value)} placeholder='Enter Location'/><br/>
            <button onClick={fetchWeatherData}>search</button> */}
        {weatherData ? (
            <>
            <h1 className="location">{weatherData.location.name}</h1>
            <span>{weatherData.location.region},{weatherData.location.country}</span>
            <div className="weather-info">
                <div className="temperature">
                {weatherData.current.temp_c}°C
                {/* {Math.round(weatherData.main.temp - 273.15)}°C */}
                </div>
                <div className="description">
                {weatherData.current.condition.text}<br/>
                <img src={weatherData.current.condition.icon}></img>
                </div>
                {/* <div className="description">{weatherData.weather[0].description}</div> */}
                <div className="date">{moment().format('MMMM Do, h:mm a')}</div>
            </div>
            </>
        ) : (
            <div className='loading'>Enter City name</div>
        )}
      </div>



      {weatherData &&
      
      <div className='subContainer sub3'>
            <>
            <div className="weather-info">
              <h3>WindSpeed</h3>
                <div className="temperature">
                  {weatherData.current.wind_kph}
                </div>
                  <span className='windspeed'>Kmph</span>
                <div className="description">
                <FontAwesomeIcon icon={faWind} />
                </div>
            </div>
            </>
      </div>
      
    }
        
    </div>
  );
};

export default Weather;



