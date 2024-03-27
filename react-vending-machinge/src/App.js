import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import VendingMachine from './VendingMachine';

import Snacks from './Snacks';
import SoftDrinks from './SoftDrinks';
import Juice from './Juice';

function App() {
  return (
    <div className="App">
      <h1>React Vending Machine App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/snacks' element={<Snacks />} />
          <Route path='/soft-drinks' element={<SoftDrinks />} />
          <Route path='/juice' element={<Juice />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
