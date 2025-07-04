import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import 'aos/dist/aos.css';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Allmodels from './Pages/Allmodels';
import ViewProduct from './Pages/ViewProduct';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import PrintReceipt from './Pages/PrintReceipt';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  const navigate = useNavigate();
    useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(!user){
            navigate("/Login")
      }
    })
  },[navigate])
  return (
    <>
          <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Allmodels' element={<Allmodels/>}/>
      <Route path='/Allmodels/:id' element={<ViewProduct/>}>
      </Route>
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='/Payment' element={<Payment/>}/>
       <Route path='/Receipt' element={<PrintReceipt/>}/>
    </Routes>

    </>
    
  );
};

export default App;
