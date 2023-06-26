import React from 'react'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import NavBar from './Components/Navbar';
import Cart from './Components/AddtoCart';
// import Product from './Routing_Components/Product'
import Product from './Components/Product';
// import Home from './Routing_Components/Home'
import Home from './Components/Home';
function App() {
  return (
   <>
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </div>
   </>
  );
}

export default App;