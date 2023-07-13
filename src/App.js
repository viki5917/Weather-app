import './App.css';

import Weather from './Components/Weather';
import Navbar from './Components/Navbar';
import { Context } from './Components/Context';

const App = () => {
  


  return (
    <Context>
      <div className="App">
        <Navbar/>
        <Weather/>
      </div>
    </Context>
  );
};

export default App;



