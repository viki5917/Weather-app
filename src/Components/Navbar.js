import React,{useContext} from 'react';
import '../App.css';
import { Locationdetails } from './Context';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const {location,setLocation, setWeatherData}=useContext(Locationdetails);

    const API_KEY='83c2fab831ff46c39a952434231107';
    // const API_KEY='bcac87bce2131be1fb6ac0399b08b084';

    const fetchWeatherData = async () => {
        try {
          const response = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
            // `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
          );
          setWeatherData(response.data);
          console.log(response)
          
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };

    // const [city, setCity] = useState('');
    // const [cityOptions, setCityOptions] = useState([]);
    // const [selectedCity, setSelectedCity] = useState(null);
  
    // useEffect(() => {
    //   // Call the weather function when a city is selected
    //   if (selectedCity) {
    //     showWeather(selectedCity);
    //   }
    // }, [selectedCity]);
  
    // const handleInputChange = (event) => {
    //   const { value } = event.target;
    //   setCity(value);
  
    //   // Call an API to fetch city suggestions based on the input value
    //   fetchCityOptions(value);
    // };
  
    // const fetchCityOptions = async (searchQuery) => {
    //   try {
    //     const response = await axios.get(`https://api.example.com/cities?search=${searchQuery}`);
    //     setCityOptions(response.data);
    //   } catch (error) {
    //     console.error('Error fetching city options:', error);
    //   }
    // };
  
    // const handleCitySelection = (cityName) => {
    //   setSelectedCity(cityName);
    // };


  return (
    <div className='Navbar'>
        <div><h1>Weather</h1></div><br/>
        <div>
          <input type='search' value={location} onChange={e=>setLocation(e.target.value)} placeholder='Enter cityname'/>
        <button onClick={fetchWeatherData}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div><br/>
    </div>



    
  )
}

export default Navbar