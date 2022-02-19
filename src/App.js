import Login from './component/Login';
import './App.css';
import Home from '../src/component/Home';
import { Route, Routes} from 'react-router-dom';
import Navbar from '../src/component/Navbar';
import VehicleList from '../src/component/VehicleList';
import Sort from '../src/component/Sort';
function App() {
  return (
   
      <div className="App">

      <Navbar/>
      <Routes>
  
    
  
      <Route path="login" element={<Login/>}>
     
      </Route>
      
   
      <Route path="vehicleList" element={<VehicleList/>}>
     
      </Route>

      <Route path="Sort" element={<Sort/>}>
     
      </Route>

      </Routes>
      
      </div>
  );
}

export default App;
