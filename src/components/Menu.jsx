import React, { useContext, useState } from 'react'
import { ViewProduct } from '../ViewSelectionProduct';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const {filters,setFilters}=useContext(ViewProduct);
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/AllModels')
    window.scrollTo(0,0);
  }
  return (
    <div data-aos="fade-up"
     data-aos-duration="1000"  className='w-full text-center items-center mt-20'>
        <h1 className='md:text-4xl text-3xl font-bold'>HELP ME CHOOSE</h1>
        <p>Tell us what you need. We'll help you choose the right products.</p>
        <div className='grid md:grid-cols-5  gap-5 md:px-40 p-5 mt-10'>
            <select onChange={(e)=>{setFilters((prev)=>({...prev,series:e.target.value}))}} className='border-1 outline-none p-1 border-gray-300 '>
                <option>SERIES</option>
                <option value={"ROG Flow"}>ROG Flow</option>
                  <option value={"ROG Zephyrus"}>ROG Zephyrus</option>
                    <option value={"ROG Strix"}>ROG Strix</option>
            </select>
            <select onChange={(e)=>{setFilters((prev)=>({...prev,gpu:e.target.value}))}} className='border-1 outline-none p-1 border-gray-300 '>
                <option>GPU</option>
                <option value={"NVIDIA® GeForce RTX™ 5090"}>NVIDIA® GeForce RTX™ 5090</option>
                  <option  value={"NVIDIA® GeForce RTX™ 5080"}>NVIDIA® GeForce RTX™ 5080</option>
                    <option  value={"NVIDIA® GeForce RTX™ 5070"}>NVIDIA® GeForce RTX™ 5070</option>
                    <option  value={"NVIDIA® GeForce RTX™ 5070TI"}>NVIDIA® GeForce RTX™ 5070TI</option>
                    <option  value={"NVIDIA® GeForce RTX™ 5060"}>NVIDIA® GeForce RTX™ 5060</option>
                    <option  value={"NVIDIA® GeForce RTX™ 4090"}>NVIDIA® GeForce RTX™ 4090</option>
                    <option  value={"NVIDIA® GeForce RTX™ 4080"}>NVIDIA® GeForce RTX™ 4080</option>
                    <option  value={"NVIDIA® GeForce RTX™ 4070"}>NVIDIA® GeForce RTX™ 4070</option>
                    <option  value={"NVIDIA® GeForce RTX™ 4060"}>NVIDIA® GeForce RTX™ 4060</option>
            </select>
            <select onChange={(e)=>{setFilters((prev)=>({...prev,cpu:e.target.value}))}} className='border-1 outline-none p-1 border-gray-300 '>
                <option>CPU</option>
                <option>AMD Ryzen™ AI MAX+ 395</option>
                  <option  value={"AMD Ryzen™ AI 7 350"}>AMD Ryzen™ AI 7 350</option>
                    <option  value={"AMD Ryzen™ 9 270"}>AMD Ryzen™ 9 270</option>
                    <option  value={"AMD Ryzen™ 9 9955HX3D"}>AMD Ryzen™ 9 9955HX3D</option>
                    <option  value={"AMD Ryzen™ 9 9955HX"}>AMD Ryzen™ 9 9955HX</option>
                    <option  value={"Intel® Core™ Ultra 9 Processor 285H"}>Intel® Core™ Ultra 9 Processor 285H</option>
                    <option  value={"Intel® Core™ Ultra 9 Processor 275HX"}>Intel® Core™ Ultra 9 Processor 275HX</option>
                    <option  value={"Intel® Core™ Ultra 7 Processor 255HX"}>Intel® Core™ Ultra 7 Processor 255HX</option>
                    <option  value={"13th Gen Intel® Core™ i9-13980HX"}>13th Gen Intel® Core™ i9-13980HX</option>
                    <option  value={"13th Gen Intel® Core™ i9-13900H"}>13th Gen Intel® Core™ i9-13900H</option>
                    <option  value={"13th Gen Intel® Core™ i5-13450HX"}>13th Gen Intel® Core™ i5-13450HX</option>
            </select>
            <select onChange={(e)=>{setFilters((prev)=>({...prev,display:e.target.value}))}} className='border-1 outline-none p-1 border-gray-300 '>
                <option>DISPLAY SIZE</option>
                <option  value={'18"'}>18"</option>
                  <option  value={'17.3"'}>17.3"</option>
                    <option  value={'16.5"'}>16.5"</option>
                    <option  value={'16"'}>16"</option>
                    <option  value={'15"'}>15"</option>
                    <option  value={'15.6"'}>15.6"</option>
                    <option  value={'14"'}>14"</option>
            </select>
            <select  className='border-1 outline-none p-1 border-gray-300 '>
                <option>DISPLAY TYPE</option>
                <option  value={"ROG Nebula Display"}>ROG Nebula Display</option>
                  <option  value={" ROG Nebula HDR Displays"}>  ROG Nebula HDR Displays</option>
                    <option  value={"OLED"}>OLED</option>
                    <option  value={"Mini LED"}>Mini LED</option>
                    <option  value={"360Hz"}>360Hz</option>
                    <option  value={"300Hz"}>300Hz</option>
                    <option  value={"4K"}>4K</option>
                    <option  value={"UHD+ (WQUXGA)"}>UHD+ (WQUXGA)</option>
                    <option  value={"UHD+ (WQUXGA) / FHD+  (WUXGA)"}>UHD+ (WQUXGA) / FHD+  (WUXGA)</option>

            </select>
            <select className='border-1 outline-none p-1 border-gray-300 '>
                <option>MEMORY</option>
                <option  value={"32GB"}>32GB</option>
            </select>
            <select onChange={(e)=>{setFilters((prev)=>({...prev,storage:e.target.value}))}} className='border-1 outline-none p-1 border-gray-300 '>
                <option>STORAGE</option>
                <option  value={"4TB"}>4TB</option>
                  <option  value={"3TB"}>3TB</option>
                    <option  value={"2TB"}>2TB</option>
            </select>
            <select onChange={(e)=>{setFilters((prev)=>({...prev,connectivity:e.target.value}))}} className='border-1 outline-none p-1 border-gray-300 '>
                <option>CONNECTIVITY</option>
                <option  value={"RType-C USB 3.2 Gen 2"}>RType-C USB 3.2 Gen 2</option>
                  <option  value={"Type-A USB 3.2 Gen 2"}>Type-A USB 3.2 Gen 2</option>
                    <option  value={"Type-A USB 3.2 Gen 1"}>Type-A USB 3.2 Gen 1</option>
                    <option  value={"HDMI"}>HDMI</option>
                    <option  value={"THUNDERBOLT"}>THUNDERBOLT</option>
            </select>
            <select onChange={(e)=>{setFilters((prev)=>({...prev,battery:e.target.value}))}} className='border-1 outline-none p-1 border-gray-300 '>
                <option>BATTERY</option>
                <option  value={"90WH"}>90WH</option>
                  <option  value={"70WH"}>70WH</option>
                    <option  value={"65WH"}>65WH</option>
            </select>
            <select className='border-1 outline-none p-1 border-gray-300 '>
                <option>NETWORKING</option>
                <option  value={"WiFi 7 (802.11be)"}>WiFi 7 (802.11be)</option>
                  <option  value={"WiFi 6E (802.11ax)"}>WiFi 6E (802.11ax)</option>
                    <option  value={"WiFi 6 (802.11ax)"}>WiFi 6 (802.11ax)</option>
            </select>

        </div>
        <button onClick={()=>{handleClick()}} className='mt-20 bg-red-500 p-4 text-white'>VIEW MY PRODUCTS</button>
    </div>
  )
}

export default Menu