import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrustPage from './Components/TrustPage/TrustPage';
import './App.css'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/SignIn/SignIn'
import ProductDetails from './Components/ProductDetails/Productdetails'
import MenContext from './Components/Context/MenContext';
import FemaleContext from './Components/Context/FemaleContext';
import KidsContext from './Components/Context/KidsContext';
import HomeContext from './Components/Context/HomeContext';
import FinalCart from './Components/FinalCart/FinalCart';
import Heart from './Components/Heart/Heart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TrustPage' element={<TrustPage />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/product/:id/' element={<ProductDetails />} />
          <Route path='/cartdone/' element={<FinalCart/>}/>
          <Route path='/men' element={<MenContext />}/>
          <Route path='/women' element={<FemaleContext/>} />
          <Route path='/beauty' element={<KidsContext/>} />
          <Route path='/home' element={<HomeContext />} />
          <Route path='AddToCart' element={<Heart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
