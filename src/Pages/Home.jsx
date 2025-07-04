import React from 'react'
import Model from '../components/Model'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Menu from '../components/Menu'
import HotProducts from '../components/HotProducts'
import Video from '../components/Video'
import Related from '../components/Related'
import Spotlight from '../components/Spotlight'
import Footer from '../components/Footer'
import Viewcart from '../components/Viewcart'


const Home = () => {

  return (
    <div >
        <Navbar/>
        <Model/>
        <Product/>
        <Menu/>
        <HotProducts/>
        <Video/>
        <Related/>
        <Spotlight/>
        <Footer/>
    </div>
  )
}

export default Home