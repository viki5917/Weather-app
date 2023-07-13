import './App.css';
import NavScrollExample from './Components/NavScrollExample';
import Weather from './Components/Weather';
import Navbar from './Components/Navbar';
import { Context } from './Components/Context';

const App = () => {
  


  return (
    <Context>
      <div className="App">
        <Navbar/>
        {/* <NavScrollExample/> */}
        <Weather/>
      </div>
    </Context>
  );
};

export default App;



